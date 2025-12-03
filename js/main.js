/**
 * SIGAP - Main JavaScript
 * Gestion des interactions et animations du site
 */

// ============================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('SIGAP - Site initialisé');

    // CORRECTION: Forcer le scroll en haut au chargement
    // (empêche le navigateur de restaurer la position de scroll)
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Initialiser les fonctionnalités
    initSmoothScroll();
    initNavigation();
    initMobileMenu();

    // Activer les animations après un court délai
    // pour éviter le scroll automatique au chargement
    setTimeout(() => {
        initAnimations();
    }, 300);

    // Futures initialisations
    // initFormValidation();
    // initFAQ();
    // initTestimonials();
});

// ============================================
// SMOOTH SCROLL VERS LES SECTIONS
// ============================================
/**
 * Active le défilement fluide vers les sections
 * lors du clic sur les liens d'ancrage
 */
function initSmoothScroll() {
    // Sélectionner tous les liens qui commencent par #
    const links = document.querySelectorAll('a[href^="#"]');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            // Ignorer les liens vides ou "#"
            if (targetId === '#' || targetId === '') return;

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Fermer le menu mobile si ouvert
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
                if (hamburger) {
                    hamburger.setAttribute('aria-expanded', 'false');
                }

                // Calculer la position avec offset pour le header fixe
                const headerOffset = 80; // Ajuster selon la hauteur du header
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// GESTION DE LA NAVIGATION
// ============================================
/**
 * Gère le comportement de la navigation
 * (sticky header, active state, etc.)
 */
function initNavigation() {
    const header = document.getElementById('header');

    if (!header) return;

    // Ajouter/retirer la classe scrolled au scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Mettre à jour l'élément actif dans la navigation
        updateActiveNavItem();
    });
}

/**
 * Met à jour l'élément actif dans la navigation
 * en fonction de la section visible
 */
function updateActiveNavItem() {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - 150)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// ============================================
// MENU MOBILE HAMBURGER
// ============================================
/**
 * Gère l'ouverture/fermeture du menu mobile
 */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .btn-mobile');

    if (!hamburger || !mobileMenu) return;

    // Toggle menu au clic sur le hamburger
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));
    });

    // Fermer le menu au clic sur un lien
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Fermer le menu au clic en dehors
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

// ============================================
// ANIMATIONS AU SCROLL
// ============================================
/**
 * Anime les éléments lorsqu'ils entrent dans le viewport
 * Utilise Intersection Observer pour détecter la visibilité
 */
function initAnimations() {
    // Vérifier si Intersection Observer est supporté
    if (!('IntersectionObserver' in window)) {
        console.log('IntersectionObserver non supporté');
        return;
    }

    // Options de l'observer
    const observerOptions = {
        threshold: 0.1, // Déclenche quand 10% de l'élément est visible
        rootMargin: '0px 0px -50px 0px' // Déclenche un peu avant que l'élément entre
    };

    // Créer l'observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajouter la classe visible pour déclencher l'animation
                entry.target.classList.add('visible');

                // Optionnel : arrêter d'observer après l'animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Sélectionner tous les éléments à animer
    const elementsToAnimate = document.querySelectorAll(`
        .section,
        .feature-card,
        .pain-point,
        .solution-pillar,
        .comparison-row,
        .differentiator-card,
        .cta-content
    `);

    // Observer chaque élément
    elementsToAnimate.forEach(element => {
        // Vérifier si l'élément est déjà visible dans le viewport
        // Ajouter une marge de sécurité de 200px pour éviter animations au chargement
        const rect = element.getBoundingClientRect();
        const isVisible = (
            rect.top < (window.innerHeight + 200) &&
            rect.bottom > 0
        );

        if (isVisible) {
            // Si déjà visible ou proche, marquer comme visible immédiatement (pas d'animation)
            element.classList.add('visible');
        } else {
            // Sinon, ajouter la classe pour animation au scroll
            element.classList.add('animate-on-scroll');
            observer.observe(element);
        }
    });
}

// ============================================
// VALIDATION DE FORMULAIRE (À DÉVELOPPER)
// ============================================
/**
 * Valide les formulaires (contact, devis, etc.)
 */
function initFormValidation() {
    // À développer : validation des champs de formulaire

    /* Exemple d'implémentation :
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (validateForm(this)) {
                // Envoyer le formulaire
                console.log('Formulaire valide');
            } else {
                console.log('Formulaire invalide');
            }
        });
    });
    */
}

/**
 * Valide un formulaire spécifique
 * @param {HTMLFormElement} form - Le formulaire à valider
 * @returns {boolean} - True si valide
 */
function validateForm(form) {
    // À développer : logique de validation
    return true;
}

// ============================================
// ACCORDÉON FAQ (À DÉVELOPPER)
// ============================================
/**
 * Gère l'ouverture/fermeture des questions FAQ
 */
function initFAQ() {
    // À développer : système d'accordéon pour la FAQ

    /* Exemple d'implémentation :
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            item.classList.toggle('active');
        });
    });
    */
}

// ============================================
// CARROUSEL TÉMOIGNAGES (À DÉVELOPPER)
// ============================================
/**
 * Gère le carrousel de témoignages
 */
function initTestimonials() {
    // À développer : système de carrousel pour les témoignages
}

// ============================================
// UTILITAIRES
// ============================================

/**
 * Détecte si un élément est visible dans le viewport
 * @param {HTMLElement} element - L'élément à vérifier
 * @returns {boolean}
 */
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Debounce une fonction
 * @param {Function} func - La fonction à debouncer
 * @param {number} wait - Délai en millisecondes
 * @returns {Function}
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
