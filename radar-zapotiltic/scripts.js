document.addEventListener('DOMContentLoaded', function() {
    // Mapeo de semanas a imágenes (puedes cargarlo desde un JSON externo)
    const weekImages = {
        'enero-1': 'images/semanas/enero-1.jpg',
        'enero-2': 'images/semanas/enero-2.jpg',
        // ... más semanas
        'abril-13': 'images/semanas/abril-13.jpg',
        'abril-14': 'images/semanas/abril-14.jpg',
        'abril-15': 'images/semanas/abril-15.jpeg',
        'abril-16': 'images/semanas/abril-16.jpeg',
        'mayo-17': 'images/semanas/mayo-17.jpeg',
        // ... más semanas
    };
    
    // Contenedor de la imagen
    const imageContainer = document.getElementById('imagen-contenedor');
    
    // Manejar clics en las semanas
    document.querySelectorAll('.week-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const weekId = this.getAttribute('data-week');
            showWeekImage(weekId);
        });
    });
    
    function showWeekImage(weekId) {
        if (weekImages[weekId]) {
            imageContainer.innerHTML = `
                <img src="${weekImages[weekId]}" 
                     alt="Datos semana ${weekId}" 
                     class="week-image">
            `;
        } else {
            imageContainer.innerHTML = `
                <p class="no-data">No hay datos disponibles para esta semana</p>
            `;
        }
        
        // Añadir animación
        imageContainer.style.opacity = '0';
        setTimeout(() => {
            imageContainer.style.opacity = '1';
        }, 50);
    }
});