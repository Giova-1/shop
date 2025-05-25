# TechStore - Tienda en Línea

![TechStore Logo](assets/images/logo.svg)

## Descripción

TechStore es una tienda en línea (e-commerce) moderna y responsiva, especializada en productos tecnológicos. El proyecto implementa un diseño atractivo y funcional con una experiencia de usuario fluida, siguiendo las mejores prácticas actuales de desarrollo web.

## Características Principales

- **Diseño Moderno y Responsivo**: Adaptación completa a dispositivos móviles, tablets y escritorio.
- **Paleta de Colores Corporativa**: Negro (#000000), Azul Oxford (#14213d), Naranja Web (#fca311), Platino (#e5e5e5) y Blanco (#ffffff).
- **Tipografía**: Fuente Montserrat en diferentes pesos para mejorar la legibilidad y estética.
- **Multilingüe**: Soporte completo para español (Colombia) e inglés (USA), fácilmente extensible a más idiomas.
- **Animaciones**: Efectos suaves para mejorar la experiencia del usuario.
- **Catálogo de Productos**: Visualización atractiva de productos con slider y páginas de detalle.

## Estructura del Proyecto

```
tienda-en-linea/
├── index.html                     # Página principal
├── pages/                         # Páginas adicionales
│   ├── products/                  # Páginas de productos individuales
│   │   ├── laptop-xps-pro.html
│   │   ├── smartphone-galaxy-s23.html
│   │   └── audifonos-premium.html
├── assets/                        # Recursos estáticos
│   ├── css/                       # Hojas de estilo
│   │   ├── styles.css            # Estilos globales
│   │   ├── home.css              # Estilos específicos para la página principal
│   │   └── product.css           # Estilos específicos para páginas de producto
│   ├── js/                        # Archivos JavaScript
│   │   ├── main.js               # Funcionalidades generales
│   │   ├── product.js            # Funcionalidades específicas para productos
│   │   └── translations/         # Archivos de traducción
│   │       ├── es.json           # Traducciones al español
│   │       └── en.json           # Traducciones al inglés
│   └── images/                    # Imágenes e iconos
│       ├── icons/                # Iconos (banderas, etc.)
│       └── logo.svg              # Logo de la tienda
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna.
- **CSS3**: Estilos avanzados, flexbox, grid, variables CSS y media queries para diseño responsivo.
- **JavaScript**: Vanilla JS para interactividad, animaciones y funcionalidades.
- **Font Awesome**: Iconos vectoriales.
- **Google Fonts**: Fuente Montserrat.
- **Semantic JSON**: Para gestión de traducciones.

## Funcionalidades Implementadas

1. **Navegación Intuitiva**: Menú principal con enlaces a secciones importantes y navegación móvil.
2. **Banner Promocional**: Banner animado con información de descuentos y beneficios.
3. **Selector de Idiomas**: Funcionalidad para cambiar entre español e inglés con banderas nacionales.
4. **Slider de Productos**: Carrusel interactivo para mostrar productos destacados.
5. **Páginas de Producto**: Visualización detallada con galería, opciones, especificaciones y reseñas.
6. **Efectos de Animación**: Aparición suave de elementos al hacer scroll.
7. **Diseño Responsivo**: Adaptación completa para todos los dispositivos.

## Características Específicas

- **Banner de Descuento**: Animación de desplazamiento horizontal que se detiene al pasar el cursor.
- **Selector de Idioma**: Menú desplegable con banderas y textos, persistencia de preferencia mediante localStorage.
- **Efecto de Subrayado**: Animación sutil en los enlaces de navegación.
- **Galería de Productos**: Miniaturas y visualización ampliada en páginas de producto.

## Instalación y Uso

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/tienda-en-linea.git
   ```

2. Navega hasta el directorio del proyecto:
   ```
   cd tienda-en-linea
   ```

3. Abre el archivo `index.html` en tu navegador preferido.

## Personalización

- **Paleta de Colores**: Modifica las variables CSS en `assets/css/styles.css`.
- **Productos**: Añade nuevas páginas de producto siguiendo la estructura existente.
- **Idiomas**: Agrega más idiomas creando nuevos archivos JSON en la carpeta `assets/js/translations/`.

## Compatibilidad

El sitio es compatible con los siguientes navegadores:
- Google Chrome (versión 60+)
- Mozilla Firefox (versión 60+)
- Safari (versión 12+)
- Microsoft Edge (versión 80+)
- Opera (versión 50+)

## Créditos

- Diseño y desarrollo: [Tu Nombre]
- Iconos: [Font Awesome](https://fontawesome.com/)
- Tipografía: [Google Fonts](https://fonts.google.com/)

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles. 