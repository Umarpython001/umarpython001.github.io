document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('navContainer');

    // Handle navbar background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navContainer.classList.add('scrolled');
            document.querySelector('.navbar').classList.add('nav-scrolled');
        } else {
            navContainer.classList.remove('scrolled');
            document.querySelector('.navbar').classList.remove('nav-scrolled');
        }
    });

    // Smooth scrolling for all anchor links
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
});
