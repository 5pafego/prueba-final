document.addEventListener('DOMContentLoaded', function() {
//obtener fecha de hoy
  const fechaHoyElemento = document.getElementById('fechaHoy');
//creamos un nuevo objeto hoy que es una instancia de la clase Date de JavaScript
  const hoy = new Date();
//toLocaleDateString('es-ES') perdite dar formato local a la fecha
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' }; // Ejemplo: 7 de mayo de 2025
  fechaHoyElemento.textContent = hoy.toLocaleDateString('es-ES', opciones);
});
