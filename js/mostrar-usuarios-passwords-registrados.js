document.addEventListener('DOMContentLoaded', function() {
  // Esta función se asegura de que el código JavaScript se ejecute solo después de que
  // todo el contenido HTML de la página se haya cargado completamente. Esto es importante
  // para que podamos acceder a los elementos HTML por su ID sin errores.

  const usuarios = {
    // Se declara una constante llamada 'usuarios' que es un objeto.
    // Este objeto almacena pares clave-valor, donde la clave es el nombre de usuario
    // (un string) y el valor es la contraseña correspondiente (también un string).
    'usuario1': 'clave123',
    'invitado': 'secreto',
    'admin': 'admin123'
    // Se pueden añadir más usuarios y contraseñas a este objeto.
  };

  const usuariosRegistradosDiv = document.getElementById('usuarios-registrados');
  // Se declara una constante llamada 'usuariosRegistradosDiv' y se le asigna
  // una referencia al elemento HTML con el ID 'usuarios-registrados'.
  // Se asume que existe un elemento <div id="usuarios-registrados"></div> en el HTML.

  if (usuariosRegistradosDiv) {
    // Se verifica si el elemento 'usuarios-registradosDiv' fue encontrado en el DOM.
    // Si existe, se procede a crear y añadir la lista de usuarios.

    const listaUsuarios = document.createElement('ul');
    // Se crea un nuevo elemento HTML 'ul' (lista desordenada).
    // Esta lista se utilizará para mostrar cada usuario y su contraseña.

    for (const usuario in usuarios) {
      // Se inicia un bucle 'for...in' que itera sobre todas las propiedades enumerables
      // del objeto 'usuarios'. En cada iteración, la variable 'usuario' contendrá
      // el nombre de la propiedad actual (es decir, el nombre de usuario).

      if (usuarios.hasOwnProperty(usuario)) {
        // Se utiliza 'hasOwnProperty' para asegurarse de que la propiedad 'usuario'
        // pertenece directamente al objeto 'usuarios' y no es una propiedad heredada
        // de su prototipo. Esto es una buena práctica para evitar comportamientos inesperados.

        const elementoLista = document.createElement('li');
        // Se crea un nuevo elemento HTML 'li' (elemento de lista) para cada usuario.
        // Este elemento representará una fila en la lista de usuarios.

        elementoLista.textContent = `${usuario}: ${usuarios[usuario]}`;
        // Se establece el contenido de texto del elemento de lista.
        // Se utiliza una plantilla literal (backticks ``) para crear una cadena que
        // incluye el nombre de usuario (la clave 'usuario' actual en el bucle),
        // dos puntos, y el valor asociado a esa clave en el objeto 'usuarios'
        // (es decir, la contraseña: 'usuarios[usuario]').

        listaUsuarios.appendChild(elementoLista);
        // Se añade el elemento de lista ('li') recién creado como un hijo del
        // elemento de lista desordenada ('ul') llamado 'listaUsuarios'.
      }
    }

    usuariosRegistradosDiv.appendChild(listaUsuarios);
    // Finalmente, se añade la lista desordenada completa ('listaUsuarios'), que ahora
    // contiene todos los nombres de usuario y sus contraseñas como elementos de lista,
    // como un hijo del elemento 'div' contenedor ('usuariosRegistradosDiv') en el HTML.
    // Esto hace que la lista de usuarios se muestre en la página.

  } else {
    // Si el elemento con el ID 'usuarios-registrados' no se encuentra en el HTML,
    // se muestra un mensaje de error en la consola del navegador para ayudar
    // en la depuración.
    console.error('No se encontró el elemento con el ID "usuarios-registrados".');
  }
});