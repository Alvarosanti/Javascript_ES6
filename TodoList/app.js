'use strict';
const btnRegistrar = document.querySelector('.btn-registrarse');
const formRegistrar = document.getElementById('form-registrarse');
const btnIniciarSesion = document.getElementById('btn-iniciarSesion');

const list = document.getElementById('list');

const listUl = document.querySelector('ul');

// let usuarios = [];

let nombre = [],
apellido = [],
correos = [],
contrasena = [];

// obtener_local_storage();
// function obtener_local_storage() {
    //     let recover = localStorage.getItem('persona');
    //     if (localStorage.getItem('persona')) {
        //         let usuario = JSON.parse(localStorage.getItem('persona'));
        //         usuarios.push(usuario);
//         // localStorage.removeItem('persona');
//         // localStorage.clear();
// 		// console.log(usuario);
// 	} else {
    //         // let data = JSON.parse(recover);
    //         // let newUser = guardar_en_localstorage();
    //         // data.push(newUser);
    //         // localStorage.setItem('persona',JSON.stringify(data));
    //         console.log('No se encontro usurio registrado en el localstorage!');
    // 	}
    // }


// const nuevoUsuario = (nom,ape,correo,contra) =>{
//     let usuario = {
//         nombre: nom,
// 		apellido: ape,
// 		correo: correo,
// 		contrasena: contra
// 	};
//     usuarios.push(usuario);
//     console.log('Arr usuarios: ',usuarios);
//     return usuario;
// };

const guardarLocal = (nom,ape,correo,contra) =>{
    // localStorage.setItem('persona', JSON.stringify(usuarios));

    nombre.push(nom);
    apellido.push(ape);
    correos.push(correo);
    contrasena.push(contra);

    localStorage.setItem('nombre', JSON.stringify(nombre));
    localStorage.setItem('apellido', JSON.stringify(apellido));
    localStorage.setItem('correo', JSON.stringify(correos));
    localStorage.setItem('contrasena', JSON.stringify(contrasena));
}

// guardar_en_localstorage(nom,ape,correo,contra);
formRegistrar.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nom = document.getElementById('id-nombre').value;
    const ape = document.getElementById('id-apellido').value;
    const correo = document.getElementById('id-correo').value;
    const contra = document.getElementById('id-contra').value;

    // nuevoUsuario(nom,ape,correo,contra);
    guardarLocal(nom,ape,correo,contra);
    formRegistrar.reset();
});

// jquery
$(document).ready(function(){
    $('.btn-registrarse').click(function(){
        var name = $('#id-nombre');
        console.log('Nuevo usuario: ',name.val());
    });
});

btnIniciarSesion.addEventListener('click', (e) =>{
    e.preventDefault();
    // datos obtenidos del localStorage
    let nom = JSON.parse(localStorage.getItem('nombre'));
    let correo = JSON.parse(localStorage.getItem('correo'));
    let contra = JSON.parse(localStorage.getItem('contrasena'));

    // datos del form iniciar seesion
    let corr = document.getElementById('id-CorreoLog').value;
    let contr = document.getElementById('id-contraLog').value;

    // datos temporales obtenidos y validados
    var email = [];
    var pass = [];

    for(let i=0; i < correo.length ; i++){
        if(correo[i] === corr){
            email.push(correo[i]);
            // return true
        }
    }

    for(let i=0; i < contra.length ; i++){
        if(contra[i] === contr){
            pass.push(contra[i]);
            // return true
        }
    }

    // for(let em in correo){
    //     if(correo[em] === corr){
    //         email.push(correo[em]);
    //         // return true
    //     }
    // }
    // for(let pas in contra){
    //     if(contra[pas] === contr){
    //         pass.push(contra[pas]);
    //         // return true;
    //     }
    // }

    if(email.toString() === corr && pass.toString() === contr){
        alert('Ingresando!');
        email = [];
        pass = [];
    }else{
        alert('Usuario o contrasena incorrecta!');
        email = [];
        pass = [];
    }

    console.log(nom);
    console.log(correo);
    console.log(contra);
    console.log('correo array pusheado',email);
    console.log('contrasena array pushead',pass);
    console.log('obtenido y validado del ls',correo);
    console.log('obtenido y validado del ls',contra);

});


// formTodo.addEventListener('submit',addToList);
// function addToList(e){
//     e.preventDefault();
//     render();
//     const input = document.getElementById('myInput').value;
//     const newLi = document.createElement('li');
//     newLi.innerText = input;
//     listUl.appendChild(newLi);
//     todos.push(input);
//     const todosString = JSON.stringify(todos);
//     localStorage.setItem('todos',todosString);
//     render();
//     formTodo.reset();
// }

const todosArray = JSON.parse(localStorage.getItem('lista todo')) || [];
const render = () =>{
    const elementos = document.querySelectorAll('ul li');
    elementos.forEach((elemento,i)=>{
        elemento.addEventListener('click',() =>{
            elemento.parentNode.removeChild(elemento);
            todosArray.splice(i,0);
            render();
        })
    })
}

let todos = [];

window.onload = () => {
    const form = document.getElementById('form-todolist');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        for(let i = 0; i<todos.length ; i++){
            todoList.innerHTML += '<li>'+ todos[i] + '</li>'
        }
    }
}





