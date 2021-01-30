// if statements

// const shouldSayHi = false;
// if(shouldSayHi === true){console.log("Hi there");}


// const numberfive = 5;
// const stringNumberFive = "5";
// if(numberfive ===  parseFloat(stringNumberFive)){
//     console.log(numberfive + parseFloat(stringNumberFive));
// }

// const myArray = [1,2,3];
// const myOtherArray = [1,2,3];
// const myOtherArray2 = myArray;  TRUE
// console.log(myArray === myOtherArray);

// const myFirstNumber = 123;
// const mySecondNumber = 121;
// if(myFirstNumber > mySecondNumber){
//     console.log("Hi there");
// }

// const banckAccountBalance = 122;
// const costOfItem = 120;
// const tax = 0.5;
// if(banckAccountBalance >= costOfItem + tax){
//     console.log("You can purchase this item")
//     if(tax >= 0.5){
//         console.log("Tax ammount too high")
//     }
// }


const banckAccountBalance = 140;
const costOfItem = 150;
const canSpendMoney = true;
const hasCreditCard = true;
const creditLimit = 150;
// if(banckAccountBalance >= costOfItem || (hasCreditCard === true && creditLimit >= costOfItem )){
//     console.log("You can purchase this item")
// }

const hasReachedCreditLimit = false;
// if(banckAccountBalance >= costOfItem){
//     console.log("Congrats. You can pay for this with cash!")
// }else if(hasCreditCard && !hasReachedCreditLimit){
//     console.log("You can pay for this with credit card")
// }else{
//     console.log("Sorry. you cannot purchase this item!")
// }

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
