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

obj.c();



