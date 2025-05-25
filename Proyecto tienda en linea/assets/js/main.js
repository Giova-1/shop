// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar componentes
    initMobileMenu();
    initAnimations();
    initLanguageSelector();
    initProductFilter();
    initTestimonialSlider();
    initSubmenus();
});

// Función para inicializar el menú móvil
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
    
    // Submenús en móvil
    const hasSubmenuLinks = mobileMenu.querySelectorAll('.has-submenu > a');
    
    hasSubmenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = link.nextElementSibling;
            submenu.classList.toggle('active');
        });
    });
}

// Función para inicializar animaciones
function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Función para inicializar el selector de idioma
function initLanguageSelector() {
    const langSelector = document.querySelector('.language-selector');
    
    if (!langSelector) return;
    
    langSelector.addEventListener('click', () => {
        // Implementar lógica de cambio de idioma
        console.log('Cambio de idioma');
    });
}

// Función para inicializar el filtro de productos
function initProductFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (!filterButtons.length || !productCards.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Eliminar clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón actual
            button.classList.add('active');
            
            // Obtener categoría a filtrar
            const filter = button.getAttribute('data-filter');
            
            // Filtrar productos
            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                    } else {
                    card.style.display = 'none';
                    }
            });
        });
    });
}

// Función para inicializar el slider de testimonios - ahora muestra todos horizontalmente
function initTestimonialSlider() {
    // La funcionalidad de slider ha sido eliminada
    // Ahora todos los testimonios se muestran horizontalmente
    console.log('Testimonios mostrados en formato horizontal');
}

// Función para inicializar submenús
function initSubmenus() {
    const hasSubmenu = document.querySelectorAll('.has-submenu');
    
    hasSubmenu.forEach(item => {
        if (item.getAttribute('data-no-submenu') === 'true') {
            const link = item.querySelector('a');
            const submenu = item.querySelector('.submenu');
            
            link.addEventListener('click', (e) => {
                if (window.innerWidth > 768) {
                    e.preventDefault();
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
        }
    });
}

// Función para manejar los botones de acción de productos
function initProductActions() {
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const icon = button.querySelector('i');
            
            if (icon.classList.contains('fa-heart')) {
                // Lógica para añadir a favoritos
                console.log('Añadir a favoritos');
            } else if (icon.classList.contains('fa-shopping-cart')) {
                // Lógica para añadir al carrito
                console.log('Añadir al carrito');
            } else if (icon.classList.contains('fa-eye')) {
                // Lógica para vista rápida
                console.log('Vista rápida');
            }
        });
    });
}

// Inicializar botones de acción de productos
document.addEventListener('DOMContentLoaded', initProductActions);

// Smooth scroll para enlaces de anclaje
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});

// Funcionalidad para el slider de testimonios con movimiento automático
document.addEventListener('DOMContentLoaded', () => {
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    const testimonialCards = testimonialsSlider.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    const dotsContainer = document.querySelector('.testimonial-dots');
    let currentIndex = 0;
    let intervalId = null;

    // Crear los puntos de navegación dinámicamente
    if (dotsContainer) {
        testimonialCards.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('testimonial-dot');
            if (index === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                scrollToIndex(index);
            });
            dotsContainer.appendChild(dot);
        });
    }
    
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.testimonial-dot') : [];

    const updateDots = () => {
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
    };

    const scrollToIndex = (index) => {
        if (!testimonialsSlider) return;
        const cardWidth = testimonialCards[0].offsetWidth + parseFloat(getComputedStyle(testimonialsSlider).gap);
        testimonialsSlider.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
        currentIndex = index;
        updateDots();
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        scrollToIndex(currentIndex);
    };

    const startAutoplay = () => {
        intervalId = setInterval(showNext, 5000); // Cambia de slide cada 5 segundos (ajustable)
    };

    const stopAutoplay = () => {
        clearInterval(intervalId);
    };

    // Event listeners para los botones de navegación
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            stopAutoplay();
            currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
            scrollToIndex(currentIndex);
            startAutoplay();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            stopAutoplay();
            showNext();
            startAutoplay();
        });
    }

    // Iniciar el autoplay al cargar la página
    if (testimonialsSlider && testimonialCards.length > 1) {
        startAutoplay();
    }
    
    // Pausar autoplay al pasar el ratón por encima del slider y reanudar al quitarlo
    if (testimonialsSlider) {
        testimonialsSlider.addEventListener('mouseenter', stopAutoplay);
        testimonialsSlider.addEventListener('mouseleave', startAutoplay);
    }
}); 