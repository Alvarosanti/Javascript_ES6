const divbtnRegisIniciar = document.getElementById('formulario-incio');
// const divFormRegis = document.getElementById('formulario-registrarse');
// const divIniciarses = document.getElementById('formulario-iniciar-sesion');
const botonRegistrar = document.getElementById('btnRegistrar');
const btniniciar = document.getElementById('btnIniciar');
const formRegis = document.querySelector('#formulario-registrarse');
const formIniciar = document.getElementById('formulario-iniciar-sesion');
const formInicio = document.getElementById('formulario-incio');

var TextRegisIniciar = `
    <form id="form-incio" >
        <Head>Lista de tareas pendientes</Head>
        <button id="btnRegistrar">Registrarse</button>
        <button id="btnIniciar">Iniciar Sesion</button>
    </form>
`;

divbtnRegisIniciar.innerHTML = TextRegisIniciar;

var formRegistrarse = `
    <form id="form-registrarse" method="POST">
        <span >Nombre: </span>
        <input id="id-nombre" required="required" type="text">
        <span>Apellido:</span>
        <input id="id-apellido" required="required" type="text">
        <span>Correo electronico: </span>
        <input id="id-correo" required="required" type="text">
        <span>Contrase&ntilde;a</span>
        <input id="id-contra" required="required" type="password" >
        <input type="checkbox"><span>Acepto los Terminos de uso</span>
        <button class="btn-registrarse">Registrarse</button>
    </form>
`;
formRegis.innerHTML = formRegistrarse;

var formIniciarSesion = `
    <form id="form-iniciarsesion" method="POST">
        <h2>Iniciar Sesion</h2>
        <span>Usuario</span>
        <input id="id-CorreoLog" required="required" type="text">
        <br><br>
        <span>Contrase&ntilde;a</span>
        <input id="id-contraLog" required="required" type="password" name="" id="">
        <button id="btn-iniciarSesion">Iniciar Sesion</button>
    </form>
`;
formIniciar.innerHTML = formIniciarSesion;

$(document).ready(function() {
    $('#btnIniciar').click(function(e) {
        e.preventDefault();
        formIniciar.style.display = 'block';
        formRegis.style.display = 'none';
        divbtnRegisIniciar.style.display = 'none'
    });
});

$(document).ready(function() {
	$('#btnRegistrar').click(function(e) {
		e.preventDefault();
		formRegis.style.display = 'block';
		formIniciar.style.display = 'none';
        divbtnRegisIniciar.style.display = 'none'

	});
});

