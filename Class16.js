// OOP

// function car(){
//     this.modelo = 'Panamera 4s' ;
//     this.status = 'venta';
//     this.QueModeloSoy = function(){
//         console.log(`Soy el modelo: ${this.modelo}`);
//     }
// }
// const mycar = new car();
// // console.log(mycar.);
// mycar.QueModeloSoy();

 
const obj = {
    nam: 'Bob',
    lastNanme: 'Sponge',
    c: function(){
        console.log(`My full name is ${this.nam} ${this.lastNanme}`);
    }
};

// obj.c();

const nam2 = Object.create(obj);
nam2.nam = 'Patricio';
nam2.lastNanme = 'Estrella';

// nam2.c();


function animal(nam,age,breed){
    this.nam = nam;
    this.age = age;
}

// const dog1 = new animal('spike',3,'labrador');
// console.log(dog1);

function Dog(nam,age,breed){
    animal.call(this,nam,age);
    this.breed = breed;
}

const rocko = new Dog('rocko',6,'Pitbull');
console.log(rocko);
