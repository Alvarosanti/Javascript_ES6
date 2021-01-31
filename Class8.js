// functions
// const myName = "Chris";
function SayHi(username,lastName,age){
    console.log("Hi" + " " + username + " " + lastName + " " + "you are" + " " + age);
}
function SayBye(username){
    console.log("Byeee" + " " + username);
}
// SayHi("Jordi","ENP",22);
// SayBye("Jordi");

const num1 = NumberDoubler(5);
const num2 = NumberDoubler(5);

function NumberDoubler(num){ 
    return num * 2;
}

function numberAdder(a,b){
    return a+b;
}
// console.log(numberAdder(num1,num2));
// console.log(NumberDoubler(20));

var sayHi = function(myName){
    if(!myName){
        var myName = "Calamardo"
    }
    // console.log("Hi" + " " + myName);
}
// const myName = "Arenita";
// sayHi("Don cangrejo");

const squaredNumber = function(num){
    return num * num;
}

const numAdder = function(squarer, num){
    const squared = squarer(3);
    return squared + num;
}

// console.log(numAdder(squaredNumber,10));

let myNumber = 120;
function addTwenty(num){
    return num + 20;
}
// console.log(addTwenty(myNumber));
// console.log(myNumber);

let mystr = "Im a string";
function hello(str){
    return  "Hello "+ str ;
}
// console.log(hello(mystr));
// console.log(mystr);

const myObj = {
    name: "Jordi",
    age : 30
};
function changeAge(myObj){
    myObj.age = 55;
}
// console.log("before ")
// console.log(myObj);
// changeAge(myObj);
// console.log("after")
// console.log( myObj);

const myNumbers = [1,2,3,4,5];
function addNumber(num1){
    myNumbers.push(num1);
    // num1.push(7);
}
console.log(myNumbers);
console.log(addNumber(7))
console.log(myNumbers);
