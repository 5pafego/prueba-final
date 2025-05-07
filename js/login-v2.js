document.addEventListener('DOMContentLoaded', function() {
  // Objeto que almacena los usuarios y sus contraseñas
  const usuarios = {
    'usuario1': 'clave123',
    'invitado': 'secreto',
    'admin': 'admin123'
  };
//imprimir lista de usuarios y sus passwords en el div usuarios-registrados
const usuariosRegistradosDiv = document.getElementById('usuarios-registrados');

if (usuariosRegistradosDiv) {
    const listaUsuarios = document.createElement('ul');

    for (const usuario in usuarios) {
      if (usuarios.hasOwnProperty(usuario)) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = `${usuario}: ${usuarios[usuario]}`; // Mostramos usuario y password
        listaUsuarios.appendChild(elementoLista);
      }
    }

    usuariosRegistradosDiv.appendChild(listaUsuarios);
  } else {
    console.error('No se encontró el elemento con el ID "usuarios-registrados".');
  }

//LOGIN
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsgElement = document.getElementById('errorMsg');

    let usuarioAutenticado = false;

    // Iteramos sobre las propiedades (usuarios) del objeto
    for (const user in usuarios) {
      if (usuarios.hasOwnProperty(user)) { // Verificamos que la propiedad pertenece directamente al objeto
        if (user === username && usuarios[user] === password) {
          sessionStorage.setItem('isLoggedIn', 'true');
          window.location.href = 'home.html';
          usuarioAutenticado = true;
          break; // Salimos del bucle una vez que se encuentra una coincidencia
        }
      }
    }

    // Si no se encontró ningún usuario con las credenciales proporcionadas
    if (!usuarioAutenticado) {
      errorMsgElement.textContent = 'Usuario o contraseña incorrecta.';
    }
  });
});




