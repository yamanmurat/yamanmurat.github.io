// Murat Yaman, Ph.D. site behavior

document.addEventListener('DOMContentLoaded', function () {
    // Copyright year
    const yearSpan = document.querySelector('footer .copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const navList = document.getElementById('nav-list');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('#nav-list a');

    // Narrow-viewport menu
    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            const open = navList.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(open));
            navToggle.textContent = open ? 'Close' : 'Menu';
        });
    }

    // Close the menu after tapping a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navList && navList.classList.contains('open')) {
                navList.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.textContent = 'Menu';
            }
        });
    });

    // Highlight the section currently in view
    const sections = document.querySelectorAll('section[id]');

    if ('IntersectionObserver' in window && sections.length) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        sections.forEach(section => observer.observe(section));
    }
});
