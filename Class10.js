// loops while & do while

// let numberOfLoops = 0;
// while (numberOfLoops < 10){
//     console.log("I am looping!");
//     console.log(numberOfLoops);
//     numberOfLoops += 1;
// }


const names = ["Bob", "Patricio","Arenita"];
function nameLooper(arr,user){
    let i = 0;
    while(i<arr.length){
        if(arr[i] === user){
            console.log("YEP");
            console.log(names[i]);
            break;
        }
        i ++;
    }
    console.log(i);
}
// nameLooper(names,"Arenita");


// do while
// let shoulRunOnlyOnce = true;
// let i = 0;
// do{
//     console.log("Do Looping!");
//     i+=1;
//     if(i === 10){
//         shoulRunOnlyOnce = false;
//     }
// } while(shoulRunOnlyOnce);


// let condition = false;
// do{
//     const userinput = prompt("Enter q to exit!")
//     if(userinput === "q"){
//         condition = false;
//     }else{
//         condition = true;
//     }
// }while(condition);

let money = 200;

do{
    CanPurchase();
}while(money>500);

function CanPurchase(){
    if(money>500){
        console.log("Can purchase!");
        return false;
    }else{
        console.log("Cannot purchase!");
    }
}