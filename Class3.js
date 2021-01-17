// objects

var myObject = new Object();
myObject['1'] = "Alvaro";
myObject['2'] = "Ramona";
myObject['3'] = "Mikkel";
myObject['4'] = "Bob";
myObject[5] = "Patricio";
// console.log(myObject)

var myOtherObject = {
    firstName : "Bob",
    lastName : "Sponge",
    age : 55,
    numbers : {
        mobile : "333-333-333",
        home : "333-4444",
    },
};
myOtherObject['Address random'] = "123 fake St." 

// console.log(myOtherObject);


var anotherObject = {
    name: "Alvaro",
    lastName: "Santisteban",
    age: "21",
    born: "1998",
    phone: "+51 987654321",
    sayHi: function (){
        console.log("Hi world am in a object");
    },
}
// console.log(anotherObject.born)
// console.log(anotherObject.sayHi());
// anotherObject.sayHi();

var donut = {
    type: "coconut",
    glazed: true,
    sweetness: 8,
    hasChocolate: false,
    sayType: function(){
        console.log("type: " + this.type);
    },
    showSweetness: function(){
        console.log("sweetness: " +this.sweetness + "/10");
    },
};
// donut.showSweetness();
// console.log(donut.sweetness + "/10")
// donut.sayType();

// Contructor pattern for createing objects
function Donut(type, glazed, sweetness,hasChocolate){
    this.type = type;
    this.glazed = glazed;
    this.sweetness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType = function(){
        console.log("Type: " + this.type);
    };
    this.showsweetness = function(){
        console.log("Sweetness: " + this.sweetness);
    };
}

// var vanilladonu = new Donut("vanilla", true, "6", false);

// console.log(vanilladonu);
// vanilladonu.showsweetness();
// coconut.sayType();
// coconut.showsweetness();


function Ceviche(type,picante,delicious,haspicante){
    this.type = type;
    this.picante = picante;
    this.delicious = delicious;
    this.haspicante = haspicante;
    this.sayType = function(){
        console.log("type: " + this.type);
    };
    this.saydelicious = function(){
        console.log("delicious:" + this.delicious + "/10");
    };
}
var cevixito = new Ceviche("mixto",true,"10",true);
var cevixito2 = new Ceviche("conchasnegras", true, 10, true);
// console.log(cevixito);
console.log(cevixito2.delicious);


