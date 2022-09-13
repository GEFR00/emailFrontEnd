//Variables
const formularioBody = document.querySelector('#enviar-mail');
const btnEnviar = document.querySelector('#enviar');
const btnVaciarForm = document.querySelector('#resetBtn');
let estadoMail = '';

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
    destino.addEventListener('blur', validarEmail);

    //Vaciar formulario
    btnVaciarForm.addEventListener('click', vaciarFormulario);

    //Envia formulario (simula)
    formularioBody.addEventListener('submit', enviarEmail);
}

function iniciarApp() {

    btnEnviar.disabled = true; 
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')

}

function validarForm(e) {
    
    const input = e.target.value;

    //Analiza los campos que deben ser rellenados por completo
    if( input.length > 0 ) {

        //Elimina los errores
        const error = document.querySelector('p.error');
        if( error ) {
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');   
        e.target.classList.add('border', 'border-green-500');   //borde del input color verde  

    } else {
        e.target.classList.remove('border', 'border-green-500');   
        e.target.classList.add('border', 'border-red-500');         //borde del input color rojo  
        mostrarError('Todos los campos deben ser rellenados');
    }

    //Se habilita el boton enviar en caso de que cumpla con los parametros
    if( estadoMail === true && asunto.value !== '' && mensaje.value !== '') {
        
        btnEnviar.disabled = false; 
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
        
    } else {
        btnEnviar.disabled = true; 
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')

    }

    
}

function validarEmail(e) {
    if( e.target.type === 'email' ) {

        //Usando expresion regular
        const expRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const correoIngresado = e.target.value;

        if( expRegular.test( correoIngresado ) ) {    //verifica si lo ingresado es valido por la expRegular
            //Elimina los errores
            const error = document.querySelector('p.error');
            if( error ) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');   
            e.target.classList.add('border', 'border-green-500');   //borde del input color verde  
            
            estadoMail = true;

        } else {
            e.target.classList.remove('border', 'border-green-500');   
            e.target.classList.add('border', 'border-red-500');     //borde del input color rojo  
            mostrarError('Email no válido.');

            estadoMail = false;
        }
    }
}

function vaciarFormulario() {
    destino.value = ''; 
    asunto.value = '';
    mensaje.value = '';
}

function enviarEmail(e) {
    e.preventDefault();

    //Habilitando el spinner 
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //Dsps de 4 seg se oculta el spinner y se muestra el mensaje
    setTimeout( () => {
        
        spinner.style.display = 'none';

        alert('Mensaje enviado con éxito')
        vaciarFormulario();

    }, 4000 );
}


function mostrarError( mensaje ) {


    const mensajeError = document.createElement('P'); 
    mensajeError.textContent = mensaje;
    mensajeError.classList.add( 'border', 'border-red-500', 'background-red-100','text-red-500', 'text-center', 'p-3', 'mt-5', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0) {
        formularioBody.appendChild( mensajeError );
    }
}

