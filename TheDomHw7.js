// Homework 7 The Dom JS
const idRectWrapper = document.getElementById('rectangleWrapper');
const rectDivs = document.querySelectorAll('.rectangulo');
console.log('Here are rectangle IDs');

for(let i = 1; i<=rectDivs.length;i++){
    console.log('IDs ' ,rectDivs[i]);
}
const valr = [];
for(const prop of rectDivs){
    var a = 0;
    console.log('All the rectangles Ids ' , a=(prop.textContent));
    valr.push(prop.textContent);
}
function loop (val){
    setTimeout(function (){
        console.log('All the rectangles Ids ' ,val);

        },1000*val);
    }

    for(var i = 1; i<=valr.length ; i++){
        loop(i);
    }
loop();

console.log('Rectangles ',rectDivs.length);


const h1 = document.querySelector('h1');
let titlle = document.getElementById('title'); 
titlle.innerText = (h1.textContent);

console.log(h1.textContent);
console.log(titlle);