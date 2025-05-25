// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar los componentes de la página de producto
    initProductGallery();
    initQuantityControls();
    initProductOptions();
    initProductTabs();
    initFeaturedProductSlider();
    
    // Inicializar el selector de idioma si está disponible
    if (typeof initLanguageSelector === 'function') {
        initLanguageSelector();
    } else {
        console.warn('Función initLanguageSelector no encontrada. Asegúrate de incluir main.js antes de product.js.');
    }
});

// Función para inicializar la galería de imágenes del producto
function initProductGallery() {
    const mainImage = document.querySelector('.product-image-main');
    const thumbnails = document.querySelectorAll('.product-thumbnail');
    
    if (!mainImage || !thumbnails.length) return;
    
    // Inicializar el primer thumbnail como activo
    thumbnails[0].classList.add('active');
    
    // Añadir event listeners a los thumbnails
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Actualizar la imagen principal
            const newSrc = thumbnail.getAttribute('src');
            mainImage.setAttribute('src', newSrc);
            
            // Actualizar la clase activa
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });
}

// Función para inicializar los controles de cantidad
function initQuantityControls() {
    const quantityControls = document.querySelectorAll('.quantity-controls');
    
    quantityControls.forEach(control => {
        const minusBtn = control.querySelector('.quantity-minus');
        const plusBtn = control.querySelector('.quantity-plus');
        const input = control.querySelector('.quantity-input');
        
        if (!minusBtn || !plusBtn || !input) return;
        
        // Asegurar que el valor inicial sea al menos 1
        if (parseInt(input.value) < 1) {
            input.value = 1;
        }
        
        // Event listener para el botón de disminuir
        minusBtn.addEventListener('click', () => {
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
            }
        });
        
        // Event listener para el botón de aumentar
        plusBtn.addEventListener('click', () => {
            let value = parseInt(input.value);
            input.value = value + 1;
        });
        
        // Evitar valores no numéricos o negativos
        input.addEventListener('change', () => {
            let value = parseInt(input.value);
            if (isNaN(value) || value < 1) {
                input.value = 1;
            }
        });
    });
}

// Función para inicializar las opciones del producto (tallas, colores)
function initProductOptions() {
    // Inicializar selección de tallas
    const sizeButtons = document.querySelectorAll('.option-size .option-button');
    initOptionButtons(sizeButtons);
    
    // Inicializar selección de colores
    const colorButtons = document.querySelectorAll('.option-color');
    initOptionButtons(colorButtons);
    
    // Inicializar botones de agregar al carrito
    initAddToCart();
}

// Función para inicializar botones de opciones genéricos
function initOptionButtons(buttons) {
    if (!buttons.length) return;
    
    // Establecer el primer botón como activo por defecto
    buttons[0].classList.add('active');
    
    // Añadir event listeners a los botones
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Desactivar todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            // Activar el botón seleccionado
            button.classList.add('active');
        });
    });
}

// Función para inicializar los botones de agregar al carrito
function initAddToCart() {
    const addToCartBtn = document.querySelector('.btn-cart');
    const buyNowBtn = document.querySelector('.btn-buy');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Obtener información del producto
            const productId = addToCartBtn.getAttribute('data-product-id');
            const quantity = document.querySelector('.quantity-input').value;
            let selectedSize = document.querySelector('.option-size .option-button.active');
            let selectedColor = document.querySelector('.option-color.active');
            
            selectedSize = selectedSize ? selectedSize.getAttribute('data-size') : null;
            selectedColor = selectedColor ? selectedColor.getAttribute('data-color') : null;
            
            // Simular agregar al carrito (mostrar mensaje)
            showMessage('Producto agregado al carrito');
            
            console.log('Producto agregado:', {
                id: productId,
                quantity: quantity,
                size: selectedSize,
                color: selectedColor
            });
        });
    }
    
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Simular compra inmediata
            showMessage('Procesando compra...');
            
            // Aquí iría el código para redirigir al checkout
            setTimeout(() => {
                // window.location.href = '/checkout.html';
                console.log('Redirigiendo a checkout...');
            }, 1500);
        });
    }
}

// Función para inicializar las pestañas de información del producto
function initProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (!tabButtons.length || !tabContents.length) return;
    
    // Establecer la primera pestaña como activa por defecto
    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');
    
    // Añadir event listeners a los botones de pestañas
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Desactivar todas las pestañas
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Activar la pestaña seleccionada
            button.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });
}

// Función para mostrar mensajes temporales
function showMessage(message) {
    // Comprobar si ya existe un mensaje
    let messageElement = document.querySelector('.message-notification');
    
    if (!messageElement) {
        // Crear un elemento para el mensaje
        messageElement = document.createElement('div');
        messageElement.className = 'message-notification';
        document.body.appendChild(messageElement);
    }
    
    // Establecer el mensaje y mostrarlo
    messageElement.textContent = message;
    messageElement.classList.add('active');
    
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        messageElement.classList.remove('active');
    }, 3000);
}

// Función para inicializar el slider de productos destacados
function initFeaturedProductSlider() {
    const slider = document.querySelector('.product-slider');
    const slides = slider.querySelectorAll('.product-card');

    // No se necesitan indicadores de paginación ni flechas
} 