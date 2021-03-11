// Events


const clicky = document.getElementById('Clicky');
const button = clicky.querySelector('button')

// button.addEventListener('click',function(event){
//     alert('hello world');
//     console.log(event.type);
// });

// function HandleClick(){
//     alert('Hello world!')
// }

button.addEventListener('click',logEvent);

// button.addEventListener('focus',logEvent);

// button.addEventListener('focusout',logEvent);

// function logEvent(e){
//     console.log(e.type);
//     if(e.type === 'click'){
//         console.log('CLICK');
//     }
//     if(e.type === 'focus'){
//         console.log('FOCUS');
//     }
//     else{
//         return false;
//     }
// };

function logEvent(e){
    button.innerText = e.timeStamp;
    button.removeEventListener('click',logEvent);
    console.log(e.type);
}


const backgrnd = document.getElementById('background');

backgrnd.addEventListener('mousedown',switchBackground);
function switchBackground(e){
    if(e.which ===1 ){
        backgrnd.classList.toggle('background-color');
    }
}

// const div2 = document.getElementById('div2');
// const query = div2.querySelector('a');

// query.addEventListener('click',function(event){
//     event.preventDefault();
//     alert('Not today!');
// });

// disable right click
// query.addEventListener('contextmenu',function(event){
//     event.preventDefault();
//     alert('Not today!');
// });


const list = document.getElementById('list');
const myform = document.getElementById('form-id');
const listUl = document.querySelector('ul');

myform.addEventListener('submit',addToList);
function addToList(e){
    e.preventDefault();
    const myinput = document.getElementById('myinput').value;
    const newLi = document.createElement('li');
    newLi.innerText = myinput;
    listUl.appendChild(newLi);
    myform.reset();
    // console.log(newLi.innerText)

}

