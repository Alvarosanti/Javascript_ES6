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

// for(let i = 0; i < 50 ; i += 1){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('Fizz Buzz');
//     }
//     else if(i % 3 === 0){
//         console.log('Fizz');
//     }
//     else if(i % 5 === 0){
//         console.log('Buzz');
//     }
//     console.log(i);
// }

// let x = 0;
// while(x < 10){
//      x += 1;
//      if( x === 5){
//          console.log('I am being skipped :( ')
//          continue;
//         // break;
//      }
//      console.log(x + 'I`m not being skipped');
// }

// a:
// for(let i= 0; i<10;i+=1){
//     console.log('Loop :'+i)
//     b:
//     for(let a = 0; a<10;a+=1){
//         console.log('Inner loop :'+a)
//         if(a===3){
//             break b;
//         }
//         if(i===5){
//             break a;
//         }
//     }
// }


// setTimeout(function(){
//     console.log('one second has passed');
// },5000);

function Looper(value){
    // var j = i;
    setTimeout(function(){
        console.log(value);
    },value * 2000);
}
for(var i=0; i < 10; i += 1){
    Looper(i);
}
// Looper();



for(var i=0; i < 10; i += 1){
    setTimeout(() => {
        console.log(i);
    },1000);
}




