const botonRegistrar = document.getElementById('btnRegistrar');
const btniniciar = document.getElementById('btnIniciar');
const formRegis = document.querySelector('#formulario-registrarse');
const formIniciar = document.getElementById('formulario-iniciar-sesion');
const formInicio = document.getElementById('formulario-incio');

// $(document).ready(function(){
//     $('.btn-registrarse').click(function(){
//         var name = $('#id-nombre');
//         console.log('Nuevo usuario: ',name.val());
//     });
// });
// window.onload = () => {
//     formRegis.style.visibility = 'visible';
// }


    botonRegistrar.onclick = (e) => {
        e.preventDefault();
        formRegis.style.display = 'block';
        formInicio.style.display = 'none';
    };

    btniniciar.onclick = (e) => {
        e.preventDefault();
        formIniciar.style.display = 'inline';
        formInicio.style.display = 'none';
    };
   
    // botonRegistrar.addEventListener('click', () => {
    //     formRegis.style.display = "block";
    // });

    // btniniciar.onclick = (e) => {
    //     e.preventDefault();
    //     formIniciar.style.display = "show";
    // }

// function mostrarformregistro(){
//     formRegis.style.display = 'none';
// }

