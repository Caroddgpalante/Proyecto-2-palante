const dropdownBtn = document.querySelector('.dropdown button');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

 var boton = document.querySelector('.dropdown button');
 boton.addEventListener('mouseover', function() {
    boton.style.backgroundColor = 'pink';
    boton.textContent = 'Click para más';
  });
  
  boton.addEventListener('mouseout', function() {
    boton.style.backgroundColor = '';
    boton.textContent = 'Más';
  });

  boton.addEventListener('mouseover', function() {
    boton.style.color = 'purple'; 
  });
  
  boton.addEventListener('mouseout', function() {
    boton.style.color = '';
  });

  
