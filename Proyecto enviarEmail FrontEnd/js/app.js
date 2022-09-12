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
    destino.addEventListener('input', validarEmail);
}

function iniciarApp() {

    btnEnviar.disabled = true; 
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
    
}

function validarForm(e) {
    
    const input = e.target.value;

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

        } else {
            e.target.classList.remove('border', 'border-green-500');   
            e.target.classList.add('border', 'border-red-500');     //borde del input color rojo  
            mostrarError('Email no válido.');
        }
    }
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

