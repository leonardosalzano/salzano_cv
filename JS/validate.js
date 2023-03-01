
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("miFormulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {	
	evento.preventDefault();

const nombreInput = document.getElementById('name').value;
const emailField = document.getElementById('user-email');
const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const message = document.getElementById('mensaje').value;

	if(nombreInput.length == 0) {
	  alert('No has escrito nada en el campo Nombre');
	  return;	
	}

	if(validEmail.test(emailField.value)==false){
		alert('Por favor, ingrese una dirección de correo válida');
		return;
	}

	if (message.length < 6) {
	  alert('Escribe algo más extenso');
	  return;
	}

	const confirmacion = confirm('¿Desea enviar el formulario?');

	if (confirmacion) {
		alert('¡Muchas gracias!. Su consulta será respondida a la brevedad.');
		miFormulario.reset(); 
	  }
  };
