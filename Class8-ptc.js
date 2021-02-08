function nameuser(fullname){
    return fullname;
};
function sayHi(user,age){
   return ("Hi" + " " + user + " " + "you r" + " " + age)
};

// console.log(sayHi(nameuser("Alvaro Santisteban"),22));

const num = doubleNum(4);
function doubleNum(num){
    return num * 2;
}
// console.log(doubleNum(3));

var hola = function(name1){
    if(!name1){
        console.log("No exite o no ingreso el nombre!");
    }else{
        console.log("Hola" + " " + name1);
    }
}
// hola("Calamardo")

var chao = function(name2){
    if(!name2){
        console.log("No ingreso el nombre o no existe!");
    }else{
        console.log("Chao" + " " + name2)
    }
}
// chao("");

const promLab = function(l1,l2,l3,l4,l5,npc){
    return (l1,l2,l3,l4,l5)/npc;
}
const promTot = function(prom,pc1,pc2,pc3,npcs){
    return (prom + pc1 + pc2 + pc3)/npcs;
}

// console.log(promTot(promLab(13,14,15,12,17,5),12,14,15,4));


const obj = {
    name : "Alvaro",
    age : 22
};
function changeMyAge(obj){
    obj.age = 24;
};
// console.log(obj);
// (changeMyAge(obj));
// console.log(obj);


const arrayNum = [1,2,3,4,5];
function insertNum(num){
    arrayNum.push(num);
}
// console.log(arrayNum);
// insertNum(6);
// insertNum(7);
// insertNum(8);
// insertNum(9);
// console.log(arrayNum);

var diAdios = () => {console.log("Adios paisa")};
// diAdios();

var multi = (n1,n2) => { return n1 * n2} ;
// console.log(multi(2,2));

const nombres =[
    {nom : "Alvaro",edadArr:22},
    {nom : "Sebas",edadArr:14},
    {nom : "Daa",edadArr:24},
    {nom : "Rocko",edadArr:10}
];
const mapNom = (nom) => nom.map((nombres) => nombres.nom);
console.log(mapNom(nombres));

const mapeoEdad = (edad) =>{
    const arrayEdad = edad.map(function(edad){
        return edad.edadArr;
    });
    return arrayEdad;
}
console.log(mapeoEdad(nombres));



