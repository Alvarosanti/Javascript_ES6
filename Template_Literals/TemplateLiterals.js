let name = 'bob';
let lasname = 'sponge';
let age = '22';

console.log(`Hello my name is ${name} and my last name is ${lasname} and i have ${age} yo`);

var myNewList = 
    // '<ul>' +    
    //     '<li>I am item 1</li>'+
    //     '<li>I am item 1</li>'+
    //     '<li>I am item 1</li>'+
    // '</ul>';

    "\
    <ul>\
        <li>I am item 1</li>\
        <li>I am item 2</li>\
        <li>I am item 3</li>\
        <li>I am item 4</li>\
    </ul>";

    const myOtherNewList = `
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    
    </ul>`;


const myDiv = document.getElementById('myDiv');
    myDiv.innerHTML = myOtherNewList;


const dateNow = new Date();
console.log(`Today is: ${dateNow.toLocaleString()}`);

const myArray = [1,2,3,4,5,6,7,8,9];

myArray.map((num) => console.log(num));




const pizza = ['cheese', 'pepperoni', 'mushrooms', 'sauce'];

const myPizza = `
    <article>
        <h1>Pizza ingredients: </h1>
        <ul>
            ${pizza.map((nom)=> `<li>${nom}</li>`).join('\n')}
        </ul> 
    </article>
`;

console.log(myPizza);
const mypizzaDiv = document.getElementById('myPizza');
mypizzaDiv.innerHTML = myPizza;

