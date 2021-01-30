const name1 = "Socrates";
const men = true;
const mortal = true;

if(name1 === "Socrates" && men === true && mortal === true){
    console.log("Socrates is a" + "men" + ", is part of a collection of items referred to as men, " + "it follows that he is mortal as well.")
}else{
console.log("Socrates does not exist!")
}

const cakeVanilla = true;
const cakeChocolate = false;
if(cakeChocolate === true || cakeVanilla ===true){
    console.log("This cake is not chocolate. Therefore, this cake is vanilla.!")
}