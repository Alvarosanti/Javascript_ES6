// arrays
var myNameArrays = new Array();
myNameArrays[0] = "Bob";
myNameArrays[1] = "Esponja";
myNameArrays[2] = "Arenita";
// console.log(myNameArrays);



var myArray = ["Jordi","Chris","Xander","Bruce"];
// inserta
myArray.push("Mikkel","Michael","Patricio","Estrella","Don Cangrejo");
// orden random 
var sortedArray = myArray.sort();
var otherarray = ["Rodrigo","jason"];
var nameRandom = ["Mickey","Guffy"]
// console.log(sortedArray);
// console.log(myArray.sort());

// concatena varios arrays
var concattedArray = myArray.concat(otherarray,nameRandom);
// console.log(concattedArray);

// intervalo
var slicedArray = concattedArray.slice(0,2);
// console.log(slicedArray);

// separador
var joinedArray = myArray.join(" ");
// console.log(joinedArray);

var Arrays = [myArray,concattedArray];
var lastName = (concattedArray.length -1);
// console.log(Arrays);
// console.log(lastName);

var myArray = ["Jordi","Chris","Xander","Bruce"];
var slicedArray = myArray.slice(myArray.length - 1);
// console.log(myArray);
// console.log(slicedArray);

