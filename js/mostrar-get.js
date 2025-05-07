//Script para mostrar-GET.html
//toma los parametros de la URL enviada desde formulario en contacto.html por metodo GET
const params = new URLSearchParams(window.location.search);
    const nombre = params.get("name");
    const email = params.get("email");
    const mensaje = params.get("message");
    const person = params.get("person");
    const services = params.getAll("services");

    const resultado = document.getElementById("data-container");
//usamos template literals para pintar los datos data-container
    resultado.innerHTML = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Comentario:</strong> ${mensaje}</p>
      <p><strong>Persona selecionada:</strong> ${person}</p>
      <p><strong>Servicios seleccionados:</strong> ${services.length > 0 ? services.join(", ") : 'Ninguno'}</p>
    `;
	
