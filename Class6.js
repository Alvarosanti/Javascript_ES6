// let const

function sayHi() {
    var shouldSayHi = true;
    var reallySayHi = true;
    if(shouldSayHi === true){
        var myName = "Chupetin";
        if(reallySayHi === true){
            var lastName = "Trujillo"
        }
        console.log("Hi" +" "+myName+" "+lastName);
    }
}
// sayHi()

// let

function sayHi2() {
    var shouldSayHi = true;
    if(shouldSayHi === true){
        let myName; 
        //  let reconoce solo cuando esta en un bloque o en una funcion
        myName = "Chupetin";
        // console.log("Hi" +" "+myName);
            }
    else{
        myName = "Trujillo";
        console.log("Hi" +" "+myName);
    }
}
// sayHi2();

// const 
const myArray = [1,2,3,4];
// console.log(myArray);
myArray.push(5);
// console.log(myArray);

// no se puede reasignar o reemplazar 
const myObject = { name: "XUPETIN"}
// console.log(myObject);
myObject.name = "XUPETRUJI";
// console.log(myObject);

var name;
console.log("hi "+ name);
name = "Jason";







