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
        mostrarError();
    }
}

function mostrarError() {


    const mensajeError = document.createElement('P'); 
    mensajeError.textContent = "Todos los campos deben ser rellenados.";
    mensajeError.classList.add( 'border', 'border-red-500', 'background-red-100','text-red-500', 'text-center', 'p-3', 'mt-5', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0) {
        formularioBody.appendChild( mensajeError );
    }
}

