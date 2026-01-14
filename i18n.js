// Internationalization (i18n) system
const I18N = {
    currentLang: 'en',
    translations: {
        en: {
            // Navigation
            "nav.home": "Home",
            "nav.about": "About",
            "nav.math": "I help with Math",
            "nav.physics": "I help with Physics",
            "nav.skills": "Skills",
            "nav.live": "GitHub Lab",
            "nav.education": "Education",
            "nav.contact": "Contact",

            // Hero section
            "hero.title": "Yauheniya Drozd",
            "hero.subtitle": "Data Science & Machine Learning Student",
            "hero.description": "Transforming data into actionable insights through advanced analytics and machine learning. Passionate about solving complex problems with data-driven solutions.",

            // Buttons
            "buttons.viewProjects": "<i class=\"fas fa-code\"></i> View Projects",
            "buttons.getInTouch": "<i class=\"fas fa-paper-plane\"></i> Get in Touch",

            // About section
            "about.title": "About Me",
            "about.p1": "I am a passionate Data Science and Systems Engineering student with expertise in machine learning, data analysis, and optimization algorithms. I specialize in turning complex data into meaningful solutions that drive decision-making and create value.",
            "about.p2": "My technical skills include Python programming, statistical analysis, and developing end-to-end machine learning pipelines. I enjoy solving challenging problems and continuously learning new technologies in the data science field.",

            // Skills section
            "skills.title": "Technical Skills",
            "skills.categories.data_science": "Data Science",
            "skills.categories.data_viz": "Data Visualization",
            "skills.categories.tools": "Tools & Technologies",
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
            "nav.math": "Pomagam z matematyką",
            "nav.physics": "Pomagam z fizyką",
            "nav.skills": "Umiejętności",
            "nav.live": "Laboratorium GitHub",
            "nav.education": "Edukacja",
            "nav.contact": "Kontakt",

            // Hero section
            "hero.title": "Yauheniya Drozd",
            "hero.subtitle": "Studentka Data Science i Machine Learning",
            "hero.description": "Przekształcam dane w praktyczne wnioski poprzez zaawansowaną analitykę i uczenie maszynowe. Pasjonuję się rozwiązywaniem złożonych problemów za pomocą rozwiązań opartych na danych.",

            // Buttons
            "buttons.viewProjects": "<i class=\"fas fa-code\"></i> Zobacz projekty",
            "buttons.getInTouch": "<i class=\"fas fa-paper-plane\"></i> Skontaktuj się ze mną",

            // About section
            "about.title": "O mnie",
            "about.p1": "Jestem pasjonatką studentką Data Science i inżynierii systemów z doświadczeniem w uczeniu maszynowym, analizie danych i algorytmach optymalizacji. Specjalizuję się w przekształcaniu złożonych danych w znaczące rozwiązania, które napędzają podejmowanie decyzji i tworzą wartość.",
            "about.p2": "Moje umiejętności techniczne obejmują programowanie w Pythonie, analizę statystyczną i tworzenie kompleksowych potoków uczenia maszynowego. Lubię rozwiązywać wyzwania i ciągle uczyć się nowych technologii w dziedzinie data science.",

            // Skills section
            "skills.title": "Umiejętności techniczne",
            "skills.categories.data_science": "Data Science",
            "skills.categories.data_viz": "Wizualizacja danych",
            "skills.categories.tools": "Narzędzia i technologie",
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
    },

    // Initialize the i18n system
    init: function() {
        // Get saved language from localStorage or default to 'en'
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
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