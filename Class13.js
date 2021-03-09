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
    button.innerText = ('Pls no more clicks!');
    console.log(e.type);
}


