// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.skill-category, .project-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Trigger initial animation
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});


// Функции для модального окна
function openEmailForm() {
    document.getElementById('emailModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
}

function closeEmailForm() {
    document.getElementById('emailModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
}

// Закрытие при клике вне окна
window.onclick = function(event) {
    const modal = document.getElementById('emailModal');
    if (event.target === modal) {
        closeEmailForm();
    }
}

// Закрытие на Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeEmailForm();
    }
});

// Функция отправки email
function sendEmail(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Показываем загрузку
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_email: 'edrozd.by@gmail.com' // Твой email
    };
    
    // Проверяем инициализирован ли EmailJS
    if (typeof emailjs === 'undefined') {
        showMessage('❌ Email service not loaded. Please refresh the page.', 'error');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
    }
    
    emailjs.send('service_owe8rdg', 'template_g5l79ei', formData)
        .then(function(response) {
            showMessage('✅ Message sent successfully! I will reply within 24 hours.', 'success');
            document.getElementById('emailForm').reset();
            setTimeout(closeEmailForm, 2000);
        })
        .catch(function(error) {
            console.error('EmailJS error:', error);
            showMessage('❌ Failed to send. Please email me directly at edrozd.by@gmail.com', 'error');
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
}

// Показ сообщений
function showMessage(text, type) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = text;
    messageDiv.className = `form-message ${type}`;
    messageDiv.style.display = 'block';
    
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}