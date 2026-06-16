import re
import sqlite3
from pathlib import Path

import pandas as pd
import plotly.express as px

WORK_DIR = Path(__file__).resolve().parent
DB_PATH = WORK_DIR / 'olist_dw.db'
TEMPLATE_PATH = WORK_DIR.parent.parent / 'olist.html'
OUTPUT_PATH = WORK_DIR / 'dashboard.html'

CSV_FILE_GLOB = '*.csv'

EMOJI_PATTERN = re.compile(
    '['
    '\U0001F300-\U0001F5FF'
    '\U0001F600-\U0001F64F'
    '\U0001F680-\U0001F6FF'
    '\U0001F700-\U0001F77F'
    '\U0001F780-\U0001F7FF'
    '\U0001F800-\U0001F8FF'
    '\U0001F900-\U0001F9FF'
    '\U0001FA00-\U0001FA6F'
    '\U0001FA70-\U0001FAFF'
    '\u2600-\u26FF'
    '\u2700-\u27BF'
    ']+',
    flags=re.UNICODE,
)

PLACEHOLDER_MAP = {
    'Przychody per miesiąc': 'plot_q09',
    'Raty vs jednorazowe': 'plot_q07',
    'Spóźnienia per miasto': 'plot_q01',
    'Opóźnienia per miesiąc': 'plot_q02',
    'Koszt dostawy per stan': 'plot_q10',
    'Czas odpowiedzi': 'plot_q14',
    'Kategorie sezon świąteczny': 'plot_q03',
    'Płatności 2017 per stan': 'plot_q08',
    'Opóźnienie vs ocena': 'plot_q05',
    'Słowa negatywne': 'plot_q12',
    'Oceny 5 per kategoria': 'plot_q11',
    'Negatywne opinie per stan': 'plot_q13',
    'Negatywne 2016': 'plot_q15',
}

CHART_MAP = {
    'plot_q09': 'Revenue by Month',
    'plot_q07': 'Payment Method Distribution',
    'plot_q01': 'Delay Percentage by City',
    'plot_q02': 'Delay Trend by Month',
    'plot_q10': 'Freight Cost by State',
    'plot_q14': 'Response Time Segments',
    'plot_q03': 'Delays by Category',
    'plot_q08': 'Payments by State 2017',
    'plot_q05': 'Delay vs Rating',
    'plot_q12': 'Negative Words',
    'plot_q11': 'Top Rated Categories',
    'plot_q13': 'Negative Reviews by State',
    'plot_q15': 'Negative Reviews 2016',
}


def remove_emoji(text: str) -> str:
    return EMOJI_PATTERN.sub('', text)


def load_csv_files_to_db(db_path: Path, work_dir: Path) -> None:
    csv_paths = sorted(work_dir.glob(CSV_FILE_GLOB))
    csv_paths = [path for path in csv_paths if path.is_file()]
    with sqlite3.connect(db_path) as conn:
        for csv_path in csv_paths:
            table_name = csv_path.stem
            try:
                df = pd.read_csv(csv_path)
            except Exception as exc:
                print(f'Failed to read {csv_path}: {exc}')
                continue
            try:
                df.to_sql(table_name, conn, if_exists='replace', index=False)
                print(f'Loaded table {table_name} ({len(df):,} rows)')
            except Exception as exc:
                print(f'Failed to write table {table_name}: {exc}')


def execute_queries(db_path: Path) -> dict:
    queries = {
        'revenue_by_month': '''
            SELECT
                substr(o.order_purchase_timestamp, 1, 7) AS order_month,
                ROUND(SUM(oi.price), 2) AS revenue
            FROM olist_order_items_dataset oi
            JOIN olist_orders_dataset o USING(order_id)
            WHERE o.order_purchase_timestamp IS NOT NULL
            GROUP BY order_month
            ORDER BY order_month
        ''',
        'delay_pct_by_city': '''
            SELECT
                c.customer_city AS customer_city,
                ROUND(100.0 * SUM(CASE WHEN julianday(o.order_delivered_customer_date) > julianday(o.order_estimated_delivery_date) THEN 1 ELSE 0 END) / COUNT(*), 2) AS delay_pct,
                COUNT(*) AS orders
            FROM olist_orders_dataset o
            JOIN olist_customers_dataset c USING(customer_id)
            WHERE o.order_delivered_customer_date IS NOT NULL
              AND o.order_estimated_delivery_date IS NOT NULL
            GROUP BY customer_city
            HAVING orders >= 20
            ORDER BY delay_pct DESC
            LIMIT 20
        ''',
        'delay_by_month': '''
            SELECT
                substr(o.order_purchase_timestamp, 1, 7) AS order_month,
                ROUND(100.0 * SUM(CASE WHEN julianday(o.order_delivered_customer_date) > julianday(o.order_estimated_delivery_date) THEN 1 ELSE 0 END) / COUNT(*), 2) AS delay_pct,
                COUNT(*) AS orders
            FROM olist_orders_dataset o
            WHERE o.order_delivered_customer_date IS NOT NULL
              AND o.order_estimated_delivery_date IS NOT NULL
            GROUP BY order_month
            ORDER BY order_month
        ''',
        'payment_method_ratio': '''
            SELECT
                payment_type,
                SUM(payment_value) AS total_value,
                SUM(CASE WHEN payment_installments > 1 THEN 1 ELSE 0 END) AS installment_count,
                SUM(CASE WHEN payment_installments = 1 THEN 1 ELSE 0 END) AS single_payment_count
            FROM olist_order_payments_dataset
            GROUP BY payment_type
            ORDER BY total_value DESC
        ''',
        'freight_by_state': '''
            SELECT
                c.customer_state AS customer_state,
                ROUND(SUM(oi.freight_value), 2) AS total_freight,
                ROUND(AVG(oi.freight_value), 2) AS avg_freight
            FROM olist_order_items_dataset oi
            JOIN olist_orders_dataset o USING(order_id)
            JOIN olist_customers_dataset c USING(customer_id)
            GROUP BY c.customer_state
            ORDER BY total_freight DESC
            LIMIT 20
        ''',
        'category_revenue': '''
            SELECT
                COALESCE(t.product_category_name_english, p.product_category_name) AS product_category_name,
                ROUND(SUM(oi.price), 2) AS revenue
            FROM olist_order_items_dataset oi
            JOIN olist_products_dataset p USING(product_id)
            LEFT JOIN product_category_name_translation t USING(product_category_name)
            GROUP BY product_category_name
            ORDER BY revenue DESC
            LIMIT 20
        ''',
        'response_time_segments': '''
            SELECT
                CASE 
                    WHEN r.review_answer_timestamp IS NULL THEN 'No answer'
                    WHEN (julianday(r.review_answer_timestamp) - julianday(o.order_purchase_timestamp)) <= 1 THEN '<24h'
                    WHEN (julianday(r.review_answer_timestamp) - julianday(o.order_purchase_timestamp)) <= 3 THEN '24-72h'
                    ELSE '>72h'
                END AS response_segment,
                COUNT(*) AS count
            FROM olist_order_reviews_dataset r
            JOIN olist_orders_dataset o USING(order_id)
            GROUP BY response_segment
        ''',
        'delays_by_category': '''
            SELECT
                COALESCE(t.product_category_name_english, p.product_category_name) AS category_name,
                ROUND(100.0 * SUM(CASE WHEN julianday(o.order_delivered_customer_date) > julianday(o.order_estimated_delivery_date) THEN 1 ELSE 0 END) / COUNT(*), 2) AS delay_pct,
                COUNT(*) AS orders
            FROM olist_order_items_dataset oi
            JOIN olist_orders_dataset o USING(order_id)
            JOIN olist_products_dataset p USING(product_id)
            LEFT JOIN product_category_name_translation t USING(product_category_name)
            WHERE substr(o.order_purchase_timestamp, 6, 2) IN ('11', '12')
              AND o.order_delivered_customer_date IS NOT NULL
              AND o.order_estimated_delivery_date IS NOT NULL
            GROUP BY category_name
            HAVING orders >= 5
            ORDER BY delay_pct DESC
            LIMIT 20
        ''',
        'payments_by_state_2017': '''
            SELECT
                c.customer_state AS state,
                payment_type,
                COUNT(*) AS tx_count
            FROM olist_order_payments_dataset op
            JOIN olist_orders_dataset o USING(order_id)
            JOIN olist_customers_dataset c USING(customer_id)
            WHERE substr(o.order_purchase_timestamp, 1, 4) = '2017'
            GROUP BY state, payment_type
            ORDER BY state, tx_count DESC
            LIMIT 50
        ''',
        'delay_vs_rating': '''
            SELECT
                CASE 
                    WHEN julianday(o.order_delivered_customer_date) > julianday(o.order_estimated_delivery_date) THEN 'Late'
                    ELSE 'On-Time'
                END AS delivery_status,
                ROUND(AVG(CAST(r.review_score AS FLOAT)), 2) AS avg_rating,
                COUNT(*) AS orders
            FROM olist_order_reviews_dataset r
            JOIN olist_orders_dataset o USING(order_id)
            WHERE o.order_delivered_customer_date IS NOT NULL
            GROUP BY delivery_status
        ''',
        'reviews_by_score': '''
            SELECT
                review_score,
                COUNT(*) AS count
            FROM olist_order_reviews_dataset
            GROUP BY review_score
            ORDER BY review_score
        ''',
        'top_rated_categories': '''
            SELECT
                COALESCE(t.product_category_name_english, p.product_category_name) AS category,
                ROUND(AVG(CAST(r.review_score AS FLOAT)), 2) AS avg_rating,
                COUNT(*) AS review_count
            FROM olist_order_reviews_dataset r
            JOIN olist_orders_dataset o USING(order_id)
            JOIN olist_order_items_dataset oi USING(order_id)
            JOIN olist_products_dataset p USING(product_id)
            LEFT JOIN product_category_name_translation t USING(product_category_name)
            WHERE r.review_score = 5
            GROUP BY category
            HAVING review_count >= 10
            ORDER BY review_count DESC
            LIMIT 20
        ''',
    }
    results = {}
    with sqlite3.connect(db_path) as conn:
        for key, query in queries.items():
            try:
                results[key] = pd.read_sql_query(query, conn)
            except Exception as exc:
                print(f'Failed to execute query {key}: {exc}')
                results[key] = pd.DataFrame()
    return results


def build_plotly_blocks(results: dict) -> dict:
    figures = {
        'plot_q09': px.area(
            results['revenue_by_month'], x='order_month', y='revenue',
            title='Revenue by Month', markers=True,
        ),
        'plot_q01': px.bar(
            results['delay_pct_by_city'].sort_values('delay_pct', ascending=False),
            x='customer_city', y='delay_pct',
            title='Delay Percentage by City',
        ),
        'plot_q07': px.pie(
            results['payment_method_ratio'], names='payment_type', values='total_value',
            title='Payment Method Distribution',
        ),
        'plot_q02': px.bar(
            results['delay_by_month'], x='order_month', y='delay_pct',
            title='Delay Trend by Month',
        ),
        'plot_q10': px.bar(
            results['freight_by_state'], x='customer_state', y='total_freight',
            title='Freight Cost by State',
        ),
        'plot_q14': px.bar(
            results['response_time_segments'], x='response_segment', y='count',
            title='Response Time Segments',
        ),
        'plot_q03': px.bar(
            results['delays_by_category'].sort_values('delay_pct', ascending=False).head(15),
            x='category_name', y='delay_pct',
            title='Delays by Category (Holiday Season)',
        ),
        'plot_q08': px.scatter(
            results['payments_by_state_2017'].head(30),
            x='state', y='tx_count', color='payment_type', size='tx_count',
            title='Payments by State 2017',
        ),
        'plot_q05': px.bar(
            results['delay_vs_rating'], x='delivery_status', y='avg_rating',
            title='Average Rating by Delivery Status',
        ),
        'plot_q12': px.bar(
            results['reviews_by_score'], x='review_score', y='count',
            title='Reviews by Score Distribution',
        ),
        'plot_q11': px.bar(
            results['top_rated_categories'].head(15).sort_values('review_count'),
            y='category', x='review_count',
            title='Top 5-Star Reviewed Categories',
            orientation='h',
        ),
        'plot_q13': px.scatter(
            results['top_rated_categories'],
            x='review_count', y='avg_rating', text='category',
            title='Category Ratings vs Review Count',
        ),
        'plot_q15': px.bar(
            results['reviews_by_score'], x='review_score', y='count',
            title='Review Score Distribution',
        ),
    }
    html_blocks = {}
    for key, fig in figures.items():
        has_data = False
        if fig.data:
            trace = fig.data[0]
            if hasattr(trace, 'labels') and len(getattr(trace, 'labels', [])) > 0:
                has_data = True
            elif hasattr(trace, 'x') and len(getattr(trace, 'x', [])) > 0:
                has_data = True
        if has_data:
            fig.update_layout(margin=dict(l=20, r=20, t=40, b=20), template='plotly_white')
            html_blocks[key] = fig.to_html(full_html=False, include_plotlyjs='cdn')
        else:
            html_blocks[key] = (
                f'<div style="padding:24px;background:#fff;border:1px solid #ddd;border-radius:20px;min-height:320px;font-family:Arial, sans-serif;color:#333;display:flex;align-items:center;justify-content:center;">'
                f'No data available for {CHART_MAP.get(key, key)}</div>'
            )
    return html_blocks


def build_template_html(template_path: Path, output_path: Path, blocks: dict) -> None:
    raw_html = template_path.read_text(encoding='utf-8')
    raw_html = remove_emoji(raw_html)
    for alt_text, placeholder_id in PLACEHOLDER_MAP.items():
        raw_html = re.sub(
            rf'<img[^>]+alt="{re.escape(alt_text)}"[^>]*>',
            f'<div id="{placeholder_id}"></div>',
            raw_html,
            flags=re.IGNORECASE,
        )
    raw_html = re.sub(r'<img\b[^>]*>', '', raw_html, flags=re.IGNORECASE)
    for placeholder_id, html_block in blocks.items():
        raw_html = raw_html.replace(f'<div id="{placeholder_id}"></div>', html_block)
    raw_html = remove_emoji(raw_html)
    output_path.write_text(raw_html, encoding='utf-8')
    print(f'Generated dashboard HTML: {output_path}')


def main() -> None:
    print(f'Working directory: {WORK_DIR}')
    print('Loading CSV files into SQLite...')
    load_csv_files_to_db(DB_PATH, WORK_DIR)
    print('Executing analytics queries...')
    results = execute_queries(DB_PATH)
    print('Building Plotly charts...')
    blocks = build_plotly_blocks(results)
    print('Building dashboard HTML...')
    build_template_html(TEMPLATE_PATH, OUTPUT_PATH, blocks)
    print('Done.')


if __name__ == '__main__':
    main()
