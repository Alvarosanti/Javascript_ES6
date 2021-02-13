// switch statements

const myFruit = "Orange";
// if(myFruit === "Apple"){
//     console.log("Awesome! I love apples.");
// } else if( myFruit === "Orange"){
//     console.log("Orange are cool!");
// } else if(myFruit === "Pear"){
//     console.log("Pears a cool!");
// }
function Fruits(fruit){
    switch(fruit){
        case "Apple":
            console.log("Apple are cool!");
            break;
        case "Pear":
            console.log("Pear are cool!");
            break;
        case "Orange":
            console.log("Orange are cool!");
            break;
        default:
            console.log("I didn't understand that but sure!");       
    }
    console.log("Broke out of switch statement!");       
}

// Fruits("Apple")

function numChecker(num){
    let value;
    switch(num){
        case 0:
        case 1:
        case 2:
            value = "Low range";
            break;
        case 3:
        case 4:
        case 5:
            value = "Mid range";
            break;
        case 6:
        case 7:
        case 8:
            value = "High range";
            break;
        default:
            value = "Input number between 0-8";
            console.log(value);  
            return;
    }
    // setVolume(value);
}
function setVolume(n){
    console.log("Volume set at " + n);
}
// numChecker(2)

const donutPicker = (flav) => {
    switch (flav){
        case "s":
            return "sprinkles";
        case "c":
            return "Chocolate";
        case "b":
            return "bear claw";
        default:
            return "Did not understand";
    }
}
const donuts = (selection) => {
    const selectedDonut = donutPicker(selection);
    if(!selectedDonut){
       console.log("Incorrect selection");
    }else{
        console.log("The donut is "+selectedDonut)
    }
}
// donuts("s");
// donuts("s");
// donuts(2);
donuts();
