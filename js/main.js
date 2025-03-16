// Main JavaScript file for the website

document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year automatically
    const currentYear = new Date().getFullYear();
    document.querySelector('footer .container p').innerHTML = 
        `&copy; ${currentYear} <span class="user-name">Your Name</span>. All rights reserved.`;
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to navigation items on scroll
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Add CSS class for active navigation items
    const style = document.createElement('style');
    style.textContent = `
        nav ul li a.active {
            background-color: var(--light-color);
            color: var(--primary-color);
        }
    `;
    document.head.appendChild(style);
    
    // Mobile navigation toggle (for responsive design)
    const createMobileNav = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        // Only create mobile nav if it doesn't exist and viewport is narrow
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-nav-toggle')) {
            const mobileNavToggle = document.createElement('button');
            mobileNavToggle.classList.add('mobile-nav-toggle');
            mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
            header.querySelector('.container').appendChild(mobileNavToggle);
            
            // Add mobile nav styles
            const mobileStyle = document.createElement('style');
            mobileStyle.textContent = `
                .mobile-nav-toggle {
                    display: block;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: var(--dark-color);
                    position: absolute;
                    top: 20px;
                    right: 20px;
                }
                
                @media (max-width: 768px) {
                    nav ul {
                        display: none;
                        flex-direction: column;
                        width: 100%;
                        text-align: center;
                    }
                    
                    nav ul.show {
                        display: flex;
                    }
                    
                    nav ul li {
                        margin: 10px 0;
                    }
                }
            `;
            document.head.appendChild(mobileStyle);
            
            // Toggle navigation on click
            mobileNavToggle.addEventListener('click', function() {
                nav.querySelector('ul').classList.toggle('show');
                this.innerHTML = nav.querySelector('ul').classList.contains('show') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
        } else if (window.innerWidth > 768 && document.querySelector('.mobile-nav-toggle')) {
            // Remove mobile nav if viewport is wide
            document.querySelector('.mobile-nav-toggle').remove();
            nav.querySelector('ul').classList.remove('show');
        }
    };
    
    // Initialize mobile nav and update on resize
    createMobileNav();
    window.addEventListener('resize', createMobileNav);
    
    // Simple animation for research areas
    const researchAreas = document.querySelectorAll('.research-area');
    
    if (researchAreas.length > 0) {
        researchAreas.forEach((area, index) => {
            area.style.opacity = '0';
            area.style.transform = 'translateY(20px)';
            area.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            // Staggered animation delay
            setTimeout(() => {
                area.style.opacity = '1';
                area.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }
    
    // Placeholder for future interactive features
    // This section can be expanded as needed for more complex functionality
});
