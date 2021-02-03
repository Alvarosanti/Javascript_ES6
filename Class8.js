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
    myNumbers.push(8);
    // num1.push(7);
}
// console.log(myNumbers);
// addNumber(myNumbers);
// // console.log(addNumber(7))
// console.log(myNumbers);

function squareNmultiply(num1,num2){
    function squarer(x){
        return x * x;
    }
    function multiplyBy10(y){
        return y * 10;
    }
    return squarer(num1) * multiplyBy10(num2);
}
// console.log(squareNmultiply(5,10));



    function formatNames(arg1,arg2){
        return arg1 + " " +arg2;
    }
    // return format1;
    // return formatNames(firstname, lastname);
    
    function dataFormatter(fullname,num){
        const formaterData = {
            name: fullname,
            age: num
        };
        return formaterData;
    }
    function PersonData(firstname,lastName,age){
        const formattedName = formatNames(firstname,lastName);
        const formatAll = dataFormatter(formattedName,age);
        return formatAll;
    }
    // console.log(PersonData("Jordi","Enp",24));


// advanced functions

var sayHi = () => {console.log("Hi, i'm using an arrow function")};
// sayHi();

const multiplier = (num1,num2) => {return num1 * num2};
// console.log(multiplier(2,2));

const users = [
    {name : "Bob", age: 22},
    {name : "Arenita", age: 23},
    {name : "Don cangrejo", age: 21}
];

const allName = (arra) => arra.map((users) => users.name);
// console.log(allName(users));

function mapUserAge(myArray){
    const allage = myArray.map(function(users){
        return users.age;
    });
    return allage;
}
// arrow function
const mapUserAge2 = (arr) => {
    const arrayAge = arr.map(function(arr){
        return arr.age;
    });
    return arrayAge;
}
// console.log(mapUserName(users));
// console.log(mapUserAge(users));
// arrow fucntion
// console.log(mapUserAge2(users));

const multiplierArrow = (x,y) => {return x * y;}
// console.log(multiplierArrow(2,3))

const squarerArrow = (x) => {return x * x}; 
// console.log(squarerArrow(2) );

const sayHiArrow =(nom) => "Hi" + " " + nom;
// console.log(sayHiArrow("Arenita"))

const numbers = [1,2,3,4,5,6,7,8,9];
const filterNumbers = numbers.filter(function(num){
    return num % 2 ;
});
// console.log(filterNumbers);

// arrow
const filteredNum2 = numbers.filter((num) => num % 2 ===0);
// console.log(filteredNum2);

const doubleNum = (num) => {
    const numberContainer = [];
    num.forEach((n)=> {
        const doubled = n * 2;
        numberContainer.push(doubled);
    });
    return numberContainer;
}

// const anotherNum = [10,11,12,13,14];
// console.log(doubleNum(anotherNum))

function numberMultiplier (x ,y ) {
    x = x || 4;
    y = y || 3;
    return x * y;
}
// console.log(numberMultiplier(5));

function stringSplitter(str) {
    return str.split(" ");
};
// console.log(stringSplitter("hola como stas"));

const bankAccout = {
    canSpendMoney: true,
    hasCreditC:true,
    balance:100
}

function canPurchaseItem(price,account = bankAccout){
    if(account.canSpendMoney){
        account.balance -= price;
        if(account.balance <= 0){
            account.canSpendMoney = false;
        }
        return true;
    } else{
        return false;
    }
}
console.log(canPurchaseItem(100))
console.log(canPurchaseItem(1))



