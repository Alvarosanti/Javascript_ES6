// class 11 for loops

// for(initial expression ; condition ; increment expression){
    // statement
// }

// var index = 0;
const sabores = ['Chocolate', 'Vanilla','strawberry','ice'];

function iceCreamLooper(arr,type){
    for(var index=0; index < arr.length ; index+=1){
        if(arr[index]=== type){
            console.log(arr[index] + ' is at position ' + index);
        }
    }
}
// iceCreamLooper(sabores,'ice')

for(let i = 0; i < 50 ; i += 1){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('Fizz Buzz');
    }
    else if(i % 3 === 0){
        console.log('Fizz');
    }
    else if(i % 5 === 0){
        console.log('Buzz');
    }
    console.log(i);
}