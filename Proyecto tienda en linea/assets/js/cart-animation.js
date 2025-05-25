// Función para manejar la animación del botón "Añadir al carrito"
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de "Añadir al carrito"
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button button');
    
    // Añadir evento de clic a cada botón
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Guardar el texto original del botón
            const originalText = this.innerHTML;
            
            // Cambiar el botón a estado de carga
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
            this.disabled = true;
            this.classList.add('loading');
            
            // Simular un tiempo de carga (3 segundos)
            setTimeout(() => {
                // Cambiar a estado de éxito
                this.innerHTML = '<i class="fas fa-check"></i> ¡Compra aprobada!';
                this.classList.remove('loading');
                this.classList.add('success');
                
                // Volver al estado original después de 2 segundos
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                    this.classList.remove('success');
                }, 2000);
            }, 3000);
        });
    });
});
