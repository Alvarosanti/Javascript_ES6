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

const banckAccountBalance = 122;
const costOfItem = 120;
const tax = 0.5;
if(banckAccountBalance >= costOfItem + tax){
    console.log("You can purchase this item")
    if(tax >= 0.5){
        console.log("Tax ammount too high")
    }
}


