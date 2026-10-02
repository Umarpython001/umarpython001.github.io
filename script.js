document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('navContainer');
    const navbar = document.querySelector('.navbar');

    // Handle navbar background change on scroll
    const onScroll = () => {
        const scrolled = window.scrollY > 50;
        navContainer.classList.toggle('scrolled', scrolled);
        navbar.classList.toggle('nav-scrolled', scrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight the nav link for the section currently in view
    const navLinks = document.querySelectorAll('.nav-link');
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                    });
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        document.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section));
    }
});
