// Classes

class Person{
    // constructor(name,lastname,age){
    //     this.name = name;
    //     this.lastname = lastname;
    //     this.age = age;
    // }
    static calculate (total){
        return total * 0.5;
    }
}

const bob = new Person(50)
console.log(bob);

// test linkedin

// var a = ['dog'];
// a[100] = 'fox';
// console.log(a.length)
// const dessert = {type: 'pie'};
// dessert.type = 'pudding';
// console.log(dessert);

// const x = 6%2;
// const y = x ? 'one' : 'two';
// console.log(y);

// function adder(x){
//     return function(y){
//         return x+y;
//     }
// }
// var fice = adder(5)
// console.log(fice(3))

// let a = 5;
console.log(a++)
console.log(++a)



var a = 8;
var b = 5;
var c = 9;

var d = a < b;
var e = b > c;
var f = (c+3) > a;

var op1 = d && e;
var op2 = f && e;
var op3 = (d || f) && (!e || f);
console.log("Op1: " + op1);
console.log("Op2: " + op2);
console.log("Op3: " + op3);


var a, b, c;
a = b = c = 5;
a += b *= c /= 5;

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);



var entero1 = 11;
var entero2 = 2;
var num1 = 1.5;
var num2 = 5.0;

var suma = entero1 + entero2;
var multiplicacion = num1 * num2;
var division1 = entero1 / entero2;
var division2 = entero1 % entero2;
var division3 = num2 / entero2;

console.log(suma);
console.log(multiplicacion);
console.log(division1);
console.log(division2);
console.log(division3);




var a = 1;
var b = 2;
var c = 5;

var op1 = a < b;
var op2 = c <= a;
var op3 = (a > b) != (c > a) ;
console.log("Op1: " + op1);
console.log("Op2: " + op2);
console.log("Op3: " + op3);