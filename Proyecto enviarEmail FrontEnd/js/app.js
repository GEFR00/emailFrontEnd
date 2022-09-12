//Variables
const formularioBody = document.querySelector('#enviar-mail');
const btnEnviar = document.querySelector('#enviar');
const btnVaciarForm = document.querySelector('#resetBtn');

//Variables inputs
const destino = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


cargarEventListeners();

function cargarEventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Inputs del Form
    destino.addEventListener('blur', validarForm);
    asunto.addEventListener('blur', validarForm);
    mensaje.addEventListener('blur', validarForm);

    //Validar email
    // destino.addEventListener('input', validarEmail);
}

function iniciarApp() {
    btnEnviar.disabled = true; 
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')


}

function validarForm(e) {
    
    const input = e.target.value;

    if( input ) {
        console.log( input );
    } else {
        e.target.classList.add('border', 'border-red-500')
        mostrarError('Todos los campos deben ser rellenados');
    }
}

// function validarEmail(e) {
//     const [...correoIngresado] = e.target.value;

//     if( correoIngresado.includes('@') || correoIngresado.includes('.com', '.cl')) {
//         console.log('correo valido')
//     } else {
//         console.log('no es valido')
//     }
// }

function mostrarError( mensaje ) {


    const mensajeError = document.createElement('P'); 
    mensajeError.textContent = mensaje;
    mensajeError.classList.add( 'border', 'border-red-500', 'background-red-100','text-red-500', 'text-center', 'p-3', 'mt-5', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0) {
        formularioBody.appendChild( mensajeError );
    }
}

