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
    
    if (!checkEmailJSLoaded()) {
        showMessage('❌ Email service not loaded. Please refresh the page.', 'error');
        return;
    }
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_email: 'edrozd.by@gmail.com'
    };
    
    console.log('Sending data:', formData);
    
    emailjs.send('service_owe8rdg', 'template_g5l79ei', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showMessage('✅ Message sent successfully!', 'success');
            document.getElementById('emailForm').reset();
            setTimeout(closeEmailForm, 2000);
        })
        .catch(function(error) {
            console.error('EmailJS error:', error);
            let errorMsg = '❌ Error: ';
            if (error.text) {
                errorMsg += error.text;
            } else {
                errorMsg += 'Please try again or contact directly';
            }
            showMessage(errorMsg, 'error');
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
}