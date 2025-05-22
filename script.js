document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        if(document.body.classList.contains('dark')) {
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
    });
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    // Contact form handler
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message!');
            form.reset();
        });
    }
}); 