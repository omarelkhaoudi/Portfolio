// ============================================
// PROFESSIONAL PORTFOLIO JAVASCRIPT
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollEffects();
    initAnimations();
    initMobileOptimizations();
    initProfileImage();
    updateProjectInfo();
    updateContactInfo();
});

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (hamburger) {
hamburger.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive);
            document.body.style.overflow = isActive ? 'hidden' : '';
});
    }

// Close mobile menu when clicking on a link
    navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
});

// Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
        e.preventDefault();
                const target = document.querySelector(href);
        if (target) {
                    const offset = 70; // Navbar height
                    const targetPosition = target.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
    } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });

    // Active navigation link based on scroll position
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate sections on scroll
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        fadeObserver.observe(section);
    });

    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        fadeObserver.observe(card);
    });
}

// ============================================
// ANIMATIONS
// ============================================
function initAnimations() {
// Animate skill bars on scroll
    const skillObserverOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

    const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach((bar, index) => {
                    const width = bar.getAttribute('data-width') || bar.style.width;
                bar.style.width = '0';
                    bar.setAttribute('data-width', width);
                    
                setTimeout(() => {
                    bar.style.width = width;
                    }, index * 100);
            });
                skillObserver.unobserve(entry.target);
        }
    });
    }, skillObserverOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
        // Store original widths
        const skillBars = skillsSection.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.setAttribute('data-width', width);
        });
        
        skillObserver.observe(skillsSection);
    }

    // Parallax effect for hero section (subtle)
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero && scrolled < hero.offsetHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }, { passive: true });
    }
}

// ============================================
// PROFILE IMAGE HANDLING
// ============================================
function initProfileImage() {
    const profileImage = document.getElementById('profile-image');
    const placeholder = document.getElementById('profile-placeholder');
    
    if (profileImage && placeholder) {
        // Try different image formats
        const imageFormats = ['assets/profile.jpg', 'assets/profile.jpeg', 'assets/profile.png', 'assets/profile.JPG', 'assets/profile.JPEG', 'assets/profile.PNG'];
        let currentFormatIndex = 0;
        
        // Hide placeholder initially
        placeholder.style.display = 'none';
        
        // Function to try next format
        function tryNextFormat() {
            if (currentFormatIndex < imageFormats.length) {
                profileImage.src = imageFormats[currentFormatIndex];
                currentFormatIndex++;
            } else {
                // All formats failed, show placeholder
                profileImage.style.display = 'none';
                placeholder.style.display = 'flex';
            }
        }
        
        // Handle image load error
        profileImage.addEventListener('error', function() {
            if (currentFormatIndex < imageFormats.length) {
                // Try next format
                tryNextFormat();
            } else {
                // All formats failed, show placeholder
                this.style.display = 'none';
                placeholder.style.display = 'flex';
            }
        });

        // Handle successful image load
        profileImage.addEventListener('load', function() {
            placeholder.style.display = 'none';
            this.style.display = 'block';
            this.style.opacity = '0';
            setTimeout(() => {
                this.style.transition = 'opacity 0.6s ease';
                this.style.opacity = '1';
            }, 100);
        });

        // Check if image is already loaded
        if (profileImage.complete && profileImage.naturalHeight !== 0) {
            // Image already loaded
            placeholder.style.display = 'none';
            profileImage.style.display = 'block';
        } else {
            // Wait a bit to see if image loads, otherwise try other formats
            setTimeout(() => {
                if (!profileImage.complete || profileImage.naturalHeight === 0) {
                    tryNextFormat();
                }
            }, 300);
        }
    }
}

// ============================================
// MOBILE OPTIMIZATIONS
// ============================================
function initMobileOptimizations() {
    // Prevent zoom on double tap (iOS)
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Improve touch targets
    const touchElements = document.querySelectorAll('.btn, .nav-link, .project-link, .contact-link');
    touchElements.forEach(element => {
        if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
            element.style.minHeight = '44px';
            element.style.minWidth = '44px';
        }
    });

    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });

    // Optimize scroll performance on mobile
    let ticking = false;
    function updateOnScroll() {
        // Scroll-based updates here
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// PROJECT INFORMATION
// ============================================
function updateProjectInfo() {
    // W.ALLfit project information
    const projectData = {
        title: 'W.ALLfit',
        description: 'Plateforme de bien-être numérique conçue pour autonomiser les femmes à travers des programmes de fitness et de nutrition personnalisés et basés sur la science. Application complète avec suivi des statistiques, graphiques intelligents, objectifs personnalisés et programmes d\'entraînement variés.',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'Express', 'React'],
        demoLink: 'https://w-al-lfit.vercel.app/',
        codeLink: 'https://github.com/omarelkhaoudi/W.ALLfit'
    };

    // Update project info
    const titleEl = document.getElementById('project-title');
    const descEl = document.getElementById('project-description');
    const demoLinkEl = document.getElementById('project-demo-link');
    const codeLinkEl = document.getElementById('project-code-link');
    const tagsEl = document.getElementById('project-tags');
    
    if (titleEl) titleEl.textContent = projectData.title;
    if (descEl) descEl.textContent = projectData.description;
    if (demoLinkEl) demoLinkEl.href = projectData.demoLink;
    if (codeLinkEl) codeLinkEl.href = projectData.codeLink;
    
    if (tagsEl) {
        tagsEl.innerHTML = '';
        projectData.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            tagsEl.appendChild(tagElement);
        });
    }
}

// ============================================
// CONTACT INFORMATION
// ============================================
function updateContactInfo() {
    // Contact details
    const contactData = {
        email: 'omarelkhaoudi7@gmail.com',
        github: 'https://github.com/omarelkhaoudi',
        linkedin: 'https://www.linkedin.com/in/omar-el-khaoudi-a5506a22a/'
    };

    // Update contact info
    const emailLinkEl = document.getElementById('email-link');
    const emailTextEl = document.getElementById('email-text');
    const githubLinkEl = document.getElementById('github-link');
    const linkedinLinkEl = document.getElementById('linkedin-link');
    
    // Gmail compose link that opens directly in Chrome
    if (emailLinkEl) {
        emailLinkEl.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactData.email}`;
        emailLinkEl.target = '_blank';
        emailLinkEl.rel = 'noopener noreferrer';
    }
    if (emailTextEl) emailTextEl.textContent = contactData.email;
    if (githubLinkEl) githubLinkEl.href = contactData.github;
    if (linkedinLinkEl) linkedinLinkEl.href = contactData.linkedin;
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================
// Lazy load images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// ERROR HANDLING
// ============================================
window.addEventListener('error', (e) => {
    console.error('Error:', e.error);
    // Graceful degradation - site should still work
});

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================
// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        hamburger.focus();
    }
});

// Focus management for accessibility
const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--primary-color)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
    });
});
