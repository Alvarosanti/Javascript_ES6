// Homework 2
// IDIOMA Español

// CONST:
// Es una constante que no cambiará o reasignar un nuevo valor, si se pueden
// añadir nuevo valores en caso de que sea un ARRAY.
console.log("--------------------CONST-------------------------")
const age2 = [25,22,28,40,42];
console.log(age2);
age2.push(44);
// age2 = [2];    <---- error
console.log(age2);
console.log("--------------------END CONST-------------------------")


// VAR:
// Es una variable que puede cambiar su valor, apunta a la funcion local como
// tambien global.
console.log("--------------------VAR-------------------------")
var Fullname = "Alvaro Santisteban"
var age = 22;
if(true){
    console.log(Fullname+" "+ age + " years");
}
var Fullname = "Alvaro Fernandez"
var age = 30;
console.log(Fullname+" "+ age + " years");
console.log("--------------------END VAR-------------------------")

// LET:
// Es tambien un varible que cambiar su valor, este puede ser reemplazado, pero
// apunta solo dentro de funciones donde sea declarada de manera local.
console.log("--------------------LET-------------------------")
function Numbers() {
    let i;
    for( i = 0; i <= 5 ; i++)
    console.log(i);
};
Numbers();
console.log("--------------------END LET-------------------------")

console.log("--------------------IZAR-------------------------")
// IZAR
var name;
console.log("hi "+name);
name = "BobSponge";
console.log("--------------------END IZAR-------------------------")

