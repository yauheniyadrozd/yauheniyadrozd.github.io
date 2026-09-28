// Internationalization (i18n) system
const I18N = {
    currentLang: 'en',
    translations: {
        en: {
            // Navigation
            "nav.home": "Home",
            "nav.about": "About",
            "nav.math": "Math",
            "nav.physics": "PhysLab",
            "nav.skills": "Skills",
            "nav.live": "GitHub Lab",
            "nav.education": "Education",
            "nav.contact": "Contact",

            // Hero section
            "hero.title": "Yauheniya Drozd",
            "hero.subtitle": "BigData Engineer & NAWA Scholar",
            "hero.description": "BigData Engineer at Innowise, NAWA Scholar, and researcher at Wrocław University of Science and Technology. I design and scale data pipelines and automation solutions that turn complex data into real business value.",

            // Buttons
            "buttons.viewProjects": "<i class=\"fas fa-code\"></i> View Projects",
            "buttons.getInTouch": "<i class=\"fas fa-paper-plane\"></i> Get in Touch",

            // Experience section
            "experience.title": "Work Experience",
            "experience.innowise.role": "BigData Engineer",
            "experience.innowise.company": "Innowise",
            "experience.innowise.period": "April 2026 — Present",
            "experience.innowise.location": "Warsaw, Poland · Remote",
            "experience.innowise.desc": "Building and scaling enterprise data pipelines with Apache Airflow, Docker, Snowflake, and Databricks.",
            "experience.volvo.role": "Data & Solutions Architect",
            "experience.volvo.company": "Volvo Group",
            "experience.volvo.project": "Power Platform Automation Project",
            "experience.volvo.period": "March 2026 — June 2026",
            "experience.volvo.location": "Wrocław, Poland · Remote",
            "experience.volvo.desc": "Led an automated Power Platform data pipeline and a 9-stage ETL flow processing ~86,000 records.",
            "experience.community.title": "Community & Projects",
            "experience.community.company": "THAUMATEC TECH GROUP · Koło Naukowe Estymator",
            "experience.community.desc": "Presented custom MCP implementations and practical insights on building end-to-end automation workflows.",

            // Skills section
            "skills.title": "Technical Skills",
            "skills.categories.data_science": "Data Science",
            "skills.categories.data_viz": "Data Visualization",
            "skills.categories.tools": "Tools & Technologies",
            "skills.categories.data_engineering": "Data Engineering & Cloud",
            "skills.items.python": "Python",
            "skills.items.pandas": "Pandas",
            "skills.items.numpy": "NumPy",
            "skills.items.scikit": "Scikit-learn",
            "skills.items.tf": "TensorFlow",
            "skills.items.matplotlib": "Matplotlib",
            "skills.items.seaborn": "Seaborn",
            "skills.items.git": "Git",
            "skills.items.sql": "SQL",
            "skills.items.jupyter": "Jupyter",
            "skills.items.airflow": "Apache Airflow",
            "skills.items.docker": "Docker",
            "skills.items.snowflake": "Snowflake",
            "skills.items.databricks": "Databricks",
            "skills.items.power_automate": "Power Automate",

            // Live projects
            "live.title": "Live GitHub Lab",
            "live.description": "This section is generated dynamically from my GitHub profile. Choose a view and explore what I am really building right now.",
            "live.controls.recent": "Most Recent",
            "live.controls.stars": "Most Starred",
            "live.loading": "Loading projects from GitHub…",
            "live.no_repos": "No public repositories found.",
            "live.error": "❌ Could not load projects from GitHub. Please try again later.",
            "live.no_description": "No description provided – pure experimental sandbox.",
            "live.updated": "Updated",
            "live.updated_recently": "Updated recently",
            "live.highlighted": "Highlighted",
            "live.open_on_github": "Open on GitHub",

            // Education
            "education.title": "Education & Achievements",
            "achievements.uni": "Wrocław University of Science and Technology",
            "achievements.uni_desc": "I'm currently studying Systems and Data Engineering at one of the most prestigious technical universities in Poland (2023-2027), receiving quality education in an international environment and developing both technical and professional skills.",
            "achievements.nawa": "NAWA Scholarship",
            "achievements.nawa_desc": "I received a scholarship from the Polish National Agency for Academic Exchange (NAWA) for outstanding academic achievements and contribution to the development of international cooperation.",
            "achievements.skills_for_work": "Skills for Work by Santander and Coursera",
            "achievements.skills_for_work_desc": "I have been selected for the \"Skills for Work\" program organized by Santander Bank and Coursera platform, enhancing my professional skills through specialized courses.",
            "badge.selected": "Selected",
            "student_government.title": "Student Government - Sports and Tourism Commission",
            "student_government.desc": "I'm an active member of the Students' Government of Wrocław University of Science and Technology (Samorząd Politechniki Wrocławskiej), specifically in the Sports and Tourism Commission (Komisja Sportu i Turystyki), where I help organize events and promote active lifestyle among students.",
            "student_government.link": "Visit Samorząd Website",
            "language.title": "Language Skills",

            // Contact
            "contact.title": "Let's Connect",
            "contact.description": "I'm currently available for freelance projects, internships, and collaboration opportunities. Whether you have an interesting project in mind or just want to chat about data science - I'd love to hear from you!",
            "contact.getInTouch": "Get in touch",
            "contact.email_label": "edrozd.by@gmail.com",
            "contact.location": "Wrocław, Poland",
            "contact.response": "Response within 24 hours",

            // Modal
            "modal.title": "Send me a message",
            "modal.subtitle": "I'll get back to you as soon as possible",
            "modal.name": "Your Name",
            "modal.email": "Your Email",
            "modal.message": "Your Message",
            "modal.submit": "Send Message",
            "modal_messages.sending": "Sending...",
            "modal_messages.sent_success": "✅ Message sent successfully! I will get back to you soon.",
            "modal_messages.service_error": "❌ Email service not loaded. Please refresh the page.",
            "modal_messages.fill_fields": "❌ Please fill all fields",
            "modal_messages.send_error_prefix": "❌ Send error: ",
            "modal_messages.try_later": "Please try again later",

            // Footer
            "footer.copy": "© 2025 Yauheniya Drozd. Built with passion for data science.",

            // Math page
            "math.title": "Math Help & Assignments",
            "math.welcome": "Welcome — this page hosts math help, office hours, and assignments for my students. Find resources, task descriptions, and submission instructions below.",
            "math.upcoming": "Upcoming Assignment — Linear Algebra: Eigenvalues",
            "math.due": "Due: <strong>2026-01-10</strong>",
            "math.list1": "Compute eigenvalues and eigenvectors for provided matrices.",
            "math.list2": "Write a short report (PDF) with results and interpretation.",
            "math.list3": "Submit via email to <a href=\"mailto:edrozd.by@gmail.com\">edrozd.by@gmail.com</a> or push to a GitHub repo and share the link.",
            "math.download": "Download assignment PDF",
            "math.resources": "Resources",
            "math.resources_khan": "Khan Academy — Linear Algebra",
            "math.resources_numpy": "NumPy documentation (useful for computations)",
            "math.office": "Office Hours",
            "math.office_text": "Tuesdays 17:00–18:30 CET — join via Telegram or email me for a meeting link.",
            "math.contact": "Contact & Submit"
        },
        pl: {
            // Navigation
            "nav.home": "Strona główna",
            "nav.about": "O mnie",
            "nav.math": "Matematyka",
            "nav.physics": "Fizyka",
            "nav.skills": "Umiejętności",
            "nav.live": "Laboratorium GitHub",
            "nav.education": "Edukacja",
            "nav.contact": "Kontakt",

            // Hero section
            "hero.title": "Yauheniya Drozd",
            "hero.subtitle": "BigData Engineer i stypendystka NAWA",
            "hero.description": "BigData Engineer w Innowise, stypendystka NAWA i badaczka na Politechnice Wrocławskiej. Projektuję i skaluję potoki danych oraz rozwiązania automatyzacyjne, które zamieniają złożone dane w realną wartość biznesową.",

            // Buttons
            "buttons.viewProjects": "<i class=\"fas fa-code\"></i> Zobacz projekty",
            "buttons.getInTouch": "<i class=\"fas fa-paper-plane\"></i> Skontaktuj się ze mną",

            // Experience section
            "experience.title": "Doświadczenie zawodowe",
            "experience.innowise.role": "BigData Engineer",
            "experience.innowise.company": "Innowise",
            "experience.innowise.period": "Kwiecień 2026 — obecnie",
            "experience.innowise.location": "Warszawa, Polska · zdalnie",
            "experience.innowise.desc": "Buduję i skaluję korporacyjne potoki danych z wykorzystaniem Apache Airflow, Dockera, Snowflake i Databricks.",
            "experience.volvo.role": "Data & Solutions Architect",
            "experience.volvo.company": "Volvo Group",
            "experience.volvo.project": "Projekt automatyzacji Power Platform",
            "experience.volvo.period": "Marzec 2026 — czerwiec 2026",
            "experience.volvo.location": "Wrocław, Polska · zdalnie",
            "experience.volvo.desc": "Prowadziłam zautomatyzowany potok danych w Power Platform oraz 9-etapowy proces ETL przetwarzający ~86 000 rekordów.",
            "experience.community.title": "Społeczność i projekty",
            "experience.community.company": "THAUMATEC TECH GROUP · Koło Naukowe Estymator",
            "experience.community.desc": "Przedstawiłam autorskie implementacje MCP i praktyczną wiedzę o budowaniu kompleksowych przepływów automatyzacji.",

            // Skills section
            "skills.title": "Umiejętności techniczne",
            "skills.categories.data_science": "Data Science",
            "skills.categories.data_viz": "Wizualizacja danych",
            "skills.categories.tools": "Narzędzia i technologie",
            "skills.categories.data_engineering": "Data Engineering i chmura",
            "skills.items.python": "Python",
            "skills.items.pandas": "Pandas",
            "skills.items.numpy": "NumPy",
            "skills.items.scikit": "Scikit-learn",
            "skills.items.tf": "TensorFlow",
            "skills.items.matplotlib": "Matplotlib",
            "skills.items.seaborn": "Seaborn",
            "skills.items.git": "Git",
            "skills.items.sql": "SQL",
            "skills.items.jupyter": "Jupyter",
            "skills.items.airflow": "Apache Airflow",
            "skills.items.docker": "Docker",
            "skills.items.snowflake": "Snowflake",
            "skills.items.databricks": "Databricks",
            "skills.items.power_automate": "Power Automate",

            // Live projects
            "live.title": "Aktywne Laboratorium GitHub",
            "live.description": "Ta sekcja jest generowana dynamicznie z mojego profilu GitHub. Wybierz widok i odkryj, nad czym pracuję teraz.",
            "live.controls.recent": "Najnowsze",
            "live.controls.stars": "Najczęściej oznaczane gwiazdką",
            "live.loading": "Wczytywanie projektów z GitHub…",
            "live.no_repos": "Nie znaleziono publicznych repozytoriów.",
            "live.error": "❌ Nie można załadować projektów z GitHub. Spróbuj ponownie później.",
            "live.no_description": "Brak opisu – czysty eksperymentalny sandbox.",
            "live.updated": "Zaktualizowano",
            "live.updated_recently": "Zaktualizowano niedawno",
            "live.highlighted": "Wyróżnione",
            "live.open_on_github": "Otwórz na GitHub",

            // Education
            "education.title": "Edukacja i osiągnięcia",
            "achievements.uni": "Politechnika Wrocławska",
            "achievements.uni_desc": "Obecnie studiuję Inżynierię Systemów i Data Engineering na jednej z najbardziej prestiżowych politechnik w Polsce (2023-2027), zdobywając wysokiej jakości edukację w środowisku międzynarodowym i rozwijając zarówno umiejętności techniczne, jak i zawodowe.",
            "achievements.nawa": "Stypendium NAWA",
            "achievements.nawa_desc": "Otrzymałam stypendium od Narodowej Agencji Wymiany Akademickiej (NAWA) za wybitne osiągnięcia akademickie i wkład w rozwój współpracy międzynarodowej.",
            "achievements.skills_for_work": "Skills for Work przez Santander i Coursera",
            "achievements.skills_for_work_desc": "Zostałam wybrana do programu \"Skills for Work\" organizowanego przez Bank Santander i platformę Coursera, rozwijając moje umiejętności zawodowe poprzez specjalistyczne kursy.",
            "badge.selected": "Wybrana",
            "student_government.title": "Samorząd Studentów – Komisja Sportu i Turystyki",
            "student_government.desc": "Jestem aktywną członkinią Samorządu Politechniki Wrocławskiej, szczególnie w Komisji Sportu i Turystyki, gdzie pomagam w organizacji eventów i promowaniu aktywnego trybu życia wśród studentów.",
            "student_government.link": "Odwiedź stronę Samorządu",
            "language.title": "Umiejętności językowe",

            // Contact
            "contact.title": "Skontaktuj się ze mną",
            "contact.description": "Jestem dostępna do projektów freelance, staży i współpracy. Niezależnie od tego, czy masz ciekawy projekt w głowie, czy chcesz porozmawiać o data science - chętnie się odzezwę!",
            "contact.getInTouch": "Skontaktuj się",
            "contact.email_label": "edrozd.by@gmail.com",
            "contact.location": "Wrocław, Polska",
            "contact.response": "Odpowiedź w ciągu 24 godzin",

            // Modal
            "modal.title": "Wyślij mi wiadomość",
            "modal.subtitle": "Odpowiem tak szybko jak to możliwe",
            "modal.name": "Twoje imię",
            "modal.email": "Twój email",
            "modal.message": "Twoja wiadomość",
            "modal.submit": "Wyślij wiadomość",
            "modal_messages.sending": "Wysyłanie...",
            "modal_messages.sent_success": "✅ Wiadomość wysłana pomyślnie! Wkrótce się odzezwę.",
            "modal_messages.service_error": "❌ Usługa email nie załadowana. Proszę odświeżyć stronę.",
            "modal_messages.fill_fields": "❌ Proszę wypełnić wszystkie pola",
            "modal_messages.send_error_prefix": "❌ Błąd wysyłania: ",
            "modal_messages.try_later": "Spróbuj ponownie później",

            // Footer
            "footer.copy": "© 2025 Yauheniya Drozd. Stworzone z pasją do data science.",

            // Math page
            "math.title": "Pomoc z matematyką i zadania",
            "math.welcome": "Witaj — ta strona zawiera pomoc matematyczną, dyżury i zadania dla moich studentów. Znajdź poniżej zasoby, opisy zadań i instrukcje dotyczące wysyłania.",
            "math.upcoming": "Nadchodzące zadanie — Algebra liniowa: Wartości własne",
            "math.due": "Termin: <strong>2026-01-10</strong>",
            "math.list1": "Oblicz wartości własne i wektory własne dla podanych macierzy.",
            "math.list2": "Napisz krótki raport (PDF) z wynikami i interpretacją.",
            "math.list3": "Wyślij e-mailem na adres <a href=\"mailto:edrozd.by@gmail.com\">edrozd.by@gmail.com</a> lub wypchnij do repozytorium GitHub i udostępnij link.",
            "math.download": "Pobierz PDF zadania",
            "math.resources": "Zasoby",
            "math.resources_khan": "Khan Academy — Algebra liniowa",
            "math.resources_numpy": "Dokumentacja NumPy (przydatna do obliczeń)",
            "math.office": "Dyżury",
            "math.office_text": "Wtorki 17:00–18:30 CET — dołącz przez Telegram lub wyślij mi e-mail, aby uzyskać link do spotkania.",
            "math.contact": "Kontakt i wysyłanie"
        }
        ,
        ru: {
            // Navigation
            "nav.home": "Главная",
            "nav.about": "Обо мне",
            "nav.math": "Математика",
            "nav.physics": "Физика",
            "nav.skills": "Навыки",
            "nav.live": "Лаборатория GitHub",
            "nav.education": "Образование",
            "nav.contact": "Контакты",

            // Hero section
            "hero.title": "Yauheniya Drozd",
            "hero.subtitle": "BigData Engineer и стипендиатка NAWA",
            "hero.description": "BigData Engineer в Innowise, стипендиатка NAWA и исследовательница во Вроцлавском политехническом университете. Проектирую и масштабирую пайплайны данных и автоматизированные решения, которые превращают сложные данные в реальную бизнес-ценность.",

            // Buttons
            "buttons.viewProjects": "<i class=\"fas fa-code\"></i> Посмотреть проекты",
            "buttons.getInTouch": "<i class=\"fas fa-paper-plane\"></i> Связаться со мной",

            // Experience section
            "experience.title": "Опыт работы",
            "experience.innowise.role": "BigData Engineer",
            "experience.innowise.company": "Innowise",
            "experience.innowise.period": "Апрель 2026 — настоящее время",
            "experience.innowise.location": "Варшава, Польша · удалённо",
            "experience.innowise.desc": "Строю и масштабирую корпоративные пайплайны данных на Apache Airflow, Docker, Snowflake и Databricks.",
            "experience.volvo.role": "Data & Solutions Architect",
            "experience.volvo.company": "Volvo Group",
            "experience.volvo.project": "Проект автоматизации Power Platform",
            "experience.volvo.period": "Март 2026 — июнь 2026",
            "experience.volvo.location": "Вроцлав, Польша · удалённо",
            "experience.volvo.desc": "Руководила автоматизированным пайплайном данных в Power Platform и 9-этапным ETL-процессом на ~86 000 записей.",
            "experience.community.title": "Сообщество и проекты",
            "experience.community.company": "THAUMATEC TECH GROUP · Koło Naukowe Estymator",
            "experience.community.desc": "Представила кастомные реализации MCP и практический опыт построения комплексных автоматизированных процессов.",

            // Skills section
            "skills.title": "Технические навыки",
            "skills.categories.data_science": "Data Science",
            "skills.categories.data_viz": "Визуализация данных",
            "skills.categories.tools": "Инструменты и технологии",
            "skills.categories.data_engineering": "Data Engineering и облако",
            "skills.items.python": "Python",
            "skills.items.pandas": "Pandas",
            "skills.items.numpy": "NumPy",
            "skills.items.scikit": "Scikit-learn",
            "skills.items.tf": "TensorFlow",
            "skills.items.matplotlib": "Matplotlib",
            "skills.items.seaborn": "Seaborn",
            "skills.items.git": "Git",
            "skills.items.sql": "SQL",
            "skills.items.jupyter": "Jupyter",
            "skills.items.airflow": "Apache Airflow",
            "skills.items.docker": "Docker",
            "skills.items.snowflake": "Snowflake",
            "skills.items.databricks": "Databricks",
            "skills.items.power_automate": "Power Automate",

            // Live projects
            "live.title": "Лаборатория GitHub",
            "live.description": "Раздел формируется автоматически из моего профиля на GitHub. Выберите режим отображения и посмотрите, над чем я работаю сейчас.",
            "live.controls.recent": "Последние",
            "live.controls.stars": "По звёздам",
            "live.loading": "Загрузка проектов с GitHub…",
            "live.no_repos": "Публичные репозитории не найдены.",
            "live.error": "❌ Не удалось загрузить проекты с GitHub. Пожалуйста, попробуйте позже.",
            "live.no_description": "Описание отсутствует — экспериментальная площадка.",
            "live.updated": "Обновлено",
            "live.updated_recently": "Обновлено недавно",
            "live.highlighted": "Рекомендованные",
            "live.open_on_github": "Открыть на GitHub",

            // Education
            "education.title": "Образование и достижения",
            "achievements.uni": "Wrocław University of Science and Technology",
            "achievements.uni_desc": "В настоящее время я изучаю System Engineering и Data Engineering в одном из ведущих технических университетов Польши (2023–2027), получая международный опыт и развивая как технические, так и профессиональные компетенции.",
            "achievements.nawa": "Стипендия NAWA",
            "achievements.nawa_desc": "Я получила стипендию от Национального агентства академического обмена Польши (NAWA) за отличные учебные достижения и вклад в международное сотрудничество.",
            "achievements.skills_for_work": "Skills for Work (Santander, Coursera)",
            "achievements.skills_for_work_desc": "Я была отобрана в программу «Skills for Work», организованную банком Santander и платформой Coursera, где улучшала профессиональные навыки через специализированные курсы.",
            "badge.selected": "Выбрано",
            "student_government.title": "Студенческий совет – комиссия по спорту и туризму",
            "student_government.desc": "Активно участвую в работе студенческого совета Политехники Вроцлавской, в частности в комиссии по спорту и туризму: помогаю организовывать мероприятия и продвигать активный образ жизни среди студентов.",
            "student_government.link": "Перейти на сайт Samorząd",
            "language.title": "Языковые навыки",

            // Contact
            "contact.title": "Свяжитесь со мной",
            "contact.description": "Я открыта для фриланс‑проектов, стажировок и сотрудничества. Если у вас есть предложение или вы хотите обсудить Data Science — напишите мне!",
            "contact.getInTouch": "Связаться",
            "contact.email_label": "edrozd.by@gmail.com",
            "contact.location": "Вроцлав, Польша",
            "contact.response": "Обычно отвечаю в течение 24 часов",

            // Modal
            "modal.title": "Отправить сообщение",
            "modal.subtitle": "Отвечу в ближайшее время",
            "modal.name": "Ваше имя",
            "modal.email": "Ваш email",
            "modal.message": "Ваше сообщение",
            "modal.submit": "Отправить",
            "modal_messages.sending": "Отправка...",
            "modal_messages.sent_success": "✅ Сообщение отправлено! Скоро свяжусь с вами.",
            "modal_messages.service_error": "❌ Сервис отправки почты не загружен. Пожалуйста, обновите страницу.",
            "modal_messages.fill_fields": "❌ Пожалуйста, заполните все поля",
            "modal_messages.send_error_prefix": "❌ Ошибка отправки: ",
            "modal_messages.try_later": "Пожалуйста, попробуйте позже",

            // Footer
            "footer.copy": "© 2025 Yauheniya Drozd. Сделано с любовью к Data Science.",

            // Math page
            "math.title": "Помощь по математике и задания",
            "math.welcome": "Добро пожаловать — на этой странице собраны материалы по математике, часы приёма и задания для студентов. Ниже вы найдёте ресурсы, описания задач и инструкции по отправке.",
            "math.upcoming": "Следующее задание — Линейная алгебра: собственные значения",
            "math.due": "Срок: <strong>2026-01-10</strong>",
            "math.list1": "Вычислите собственные значения и собственные векторы для указанных матриц.",
            "math.list2": "Подготовьте краткий отчёт (PDF) с результатами и их интерпретацией.",
            "math.list3": "Отправьте на почту <a href=\"mailto:edrozd.by@gmail.com\">edrozd.by@gmail.com</a> или опубликуйте в репозитории GitHub и пришлите ссылку.",
            "math.download": "Скачать PDF задания",
            "math.resources": "Ресурсы",
            "math.resources_khan": "Khan Academy — Линейная алгебра",
            "math.resources_numpy": "Документация NumPy (полезна для расчётов)",
            "math.office": "Часы приёма",
            "math.office_text": "По вторникам 17:00–18:30 CET — присоединяйтесь через Telegram или напишите мне, чтобы получить ссылку на встречу.",
            "math.contact": "Контакт и отправка"
        }
    },

    // Initialize the i18n system
    init: function() {
        // Get saved language from localStorage. If it's missing or invalid, default to 'en'
        const storedLang = localStorage.getItem('selectedLanguage');
        const savedLang = (storedLang && this.translations[storedLang]) ? storedLang : 'en';
        // Ensure localStorage reflects the effective language
        localStorage.setItem('selectedLanguage', savedLang);
        this.setLanguage(savedLang);

        // Populate language selector
        this.populateLanguageSelector();

        // Add event listener to language selector
        const langSelect = document.getElementById('langSelect');
        if (langSelect) {
            langSelect.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
    },

    // Set the current language
    setLanguage: function(lang) {
        if (!this.translations[lang]) {
            console.warn(`Language '${lang}' not found, falling back to 'en'`);
            lang = 'en';
        }

        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);

        // Update document language attribute
        document.documentElement.lang = lang;

        // Update all i18n elements
        this.updateTranslations();

        // Update language selector
        const langSelect = document.getElementById('langSelect');
        if (langSelect) {
            langSelect.value = lang;
        }
    },

    // Get translation for a key
    t: function(key) {
        const translation = this.translations[this.currentLang]?.[key];
        if (!translation) {
            console.warn(`Translation missing for key: ${key} in language: ${this.currentLang}`);
            return key; // Fallback to key if translation not found
        }
        return translation;
    },

    // Update all elements with data-i18n attributes
    updateTranslations: function() {
        // Update regular i18n attributes
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update i18n-html attributes (for HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            const translation = this.t(key);
            if (translation) {
                element.innerHTML = translation;
            }
        });
    },

    // Populate the language selector with available languages
    populateLanguageSelector: function() {
        const langSelect = document.getElementById('langSelect');
        if (!langSelect) return;

        // Clear existing options
        langSelect.innerHTML = '';

        // Add options for each available language
        Object.keys(this.translations).forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.textContent = this.getLanguageName(lang);
            langSelect.appendChild(option);
        });
    },

    // Get display name for a language code
    getLanguageName: function(langCode) {
        const names = {
            'en': 'English',
            'pl': 'Polski',
            'de': 'Deutsch',
            'ru': 'Русский',
            'be': 'Беларуская'
        };
        return names[langCode] || langCode.toUpperCase();
    }
};

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    I18N.init();
});