// Obtén los botones de filtro
const filterBtns = document.querySelectorAll('.filter-btn');

// Añade un evento click a cada botón
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remueve la clase 'active' de todos los botones
    filterBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Agrega la clase 'active' al botón clickeado
    btn.classList.add('active');
    
    // Obtén la categoría seleccionada
    const category = btn.getAttribute('data-category');
    
    // Obtén todas las imágenes de la galería
    const images = document.querySelectorAll('#gallery .tarjetas');
    
    // Itera sobre las imágenes y muestra u oculta según la categoría seleccionada
    images.forEach(tarjeta => {
      if (category === 'all' || tarjeta.getAttribute('data-category') === category) {
        tarjeta.style.display = 'block';
      } else {
        tarjeta.style.display = 'none';
      }
    });
  });
});