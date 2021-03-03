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


const mytag = document.getElementsByTagName("P");

for(let i = 0; i < mytag.length ; i++){
    mytag[i].innerHTML = 'Renamed!';
}

for(const a of mytag){
    a.innerHTML = 'Renamed again!!';
}
