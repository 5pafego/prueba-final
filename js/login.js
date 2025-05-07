// Espera a que el documento HTML esté completamente cargado antes de ejecutar este código.
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();//evita que recargue la página al enviar el formulario con el boton submit
//Tomamos los datos usuario y la contraseña del formulario login y los guardamos en 2 constantes
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
//comparamos si el usuario y la contraseña guardados en la variable de sesion coincide con los nuestros
    if (username === 'usuario1' && password === '1234') {
//si coincide usuario y contraseña guardamos nueva variable de sesión IsLoggedIn con valor true, y redirigimos a index.html
		sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    } else {
// si no coincide pintamos mensaje d eerror en elemento del DOm con id errorMsg
        document.getElementById('errorMsg').textContent = 'Usuario o contraseña incorrecta.';
    }
  })
});




