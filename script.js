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
function sendEmail(event) {
    event.preventDefault();
    console.log('=== SEND EMAIL FUNCTION STARTED ===');
    
    // Проверка загрузки EmailJS
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS is not defined!');
        showMessage('❌ Email service not loaded. Please refresh the page.', 'error');
        return;
    }
    console.log('EmailJS is loaded');
    
    // Находим кнопку
    const submitBtn = event.target.querySelector('button[type="submit"]');
    if (!submitBtn) {
        console.error('Submit button not found!');
        return;
    }
    
    const originalText = submitBtn.innerHTML;
    console.log('Button found, original text:', originalText);
    
    // Показываем загрузку
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    console.log('Button disabled and loading shown');
    
    // Получаем данные формы
    const formData = {
        name: document.getElementById('name')?.value || '',
        email: document.getElementById('email')?.value || '',
        message: document.getElementById('message')?.value || '',
        to_email: 'edrozd.by@gmail.com'
    };
    
    console.log('Form data:', formData);
    
    // Проверяем заполненность полей
    if (!formData.name || !formData.email || !formData.message) {
        showMessage('❌ Please fill all fields', 'error');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
    }
    
    // Отправка
    console.log('Sending with service_owe8rdg, template_g5l79ei');
    emailjs.send('service_owe8rdg', 'template_g5l79ei', formData)
        .then(function(response) {
            console.log('SUCCESS! Status:', response.status, 'Text:', response.text);
            showMessage('✅ Message sent successfully!', 'success');
            document.getElementById('emailForm').reset();
            setTimeout(closeEmailForm, 2000);
        })
        .catch(function(error) {
            console.error('EMAILJS ERROR:', error);
            console.log('Error status:', error.status);
            console.log('Error text:', error.text);
            
            let errorMsg = '❌ Send error: ';
            if (error.text) {
                errorMsg += error.text;
            } else {
                errorMsg += 'Please try again later';
            }
            showMessage(errorMsg, 'error');
        })
        .finally(() => {
            console.log('Finally - restoring button');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
}