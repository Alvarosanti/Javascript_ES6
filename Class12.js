// The dom

// function showAlert(){
//     window.alert('Aleeeeeeeeert!');
// }

// showAlert = () => window.alert('Alerrtaaa!');
// document.body.innerHTML = "<h1>Something else!</h1>";
// console.log(document.body)

// const mytag = document.getElementsByTagName("P");
// console.log(mytag[0].innerText);
// console.log(mytag[1].innerText);
// console.log(mytag[2].innerText);

// mytag[2].innerText = "Hello, my name is Don cangrejo!"


// const mytag = document.getElementsByTagName("P");

// for(let i = 0; i < mytag.length ; i++){
//     mytag[i].innerHTML = 'Renamed!';
// }

// for(const a of mytag){
//     a.innerHTML = 'Renamed again!!';
// }

// const span = document.getElementsByTagName("span");
// for(const sp of span){
//     sp.innerHTML = 'Somebody';
// }


// const identifier = document.getElementById('identifier');
// identifier.innerText = 'We all';
// identifier.innerHTML = '<h1> We all </h1>'
// console.log(identifier);


// const myAppDiv = document.getElementById('app');
// const specialWord = myAppDiv.getElementsByTagName('span');
// const totalwords = document.getElementById('total');

// for(const sp of specialWord){
//     sp.innerText= 'Testin';
// }

// totalwords.innerHTML = specialWord.length;

// const memberUl = document.getElementById('members');
// const allmemb = document.getElementsByTagName('li');

// for(const membs of allmemb){
//     if(membs.innerText === 'Patricio'){
//         membs.innerText = 'Plankton';
//         // membs.innerHTML = '<h1></h1>'
//     }
// }

// const myDiv = document.querySelector('div');
// myDiv.style.color = 'red';
// myDiv.style.fontSize = '50px';

// console.log(myDiv.style);\


const dummyDivs = document.querySelectorAll('.dan span');
// const iddan = document.getElementById('id-dan');
// const footer = document.getElementById('footer');
// // const elID = footer.id;
// const replacementID = 'bottom';
// footer.id = replacementID;
// console.log('footer');

// console.log(elID);
// console.log(iddan);
// console.log(dummyDivs.length);

// for(const prop of dummyDivs){
//     prop.style.color = 'blue';
//     prop.style.fontSize = '30px'
// }

const el = document.getElementsByTagName('div');
const footerDiv = el[el.length -1];
footerDiv.id = 'footer';


const purpleDiv = document.querySelectorAll('.purple');
purpleDiv.style.background = 'red';
purpleDiv.style.height = '100px';
purpleDiv.style.width = '100px';