// class 11 for loops

// for(initial expression ; condition ; increment expression){
    // statement
// }

// var index = 0;
const sabores = ['Chocolate', 'Vanilla','strawberry','ice'];

function iceCreamLooper(arr,type){
    for(var index=0; index < arr.length ; index+=1){
        if(arr[index]=== type){
            console.log(arr[index] + ' is at position ' + (index+1));
        }
    }
}
// iceCreamLooper(sabores,'Chocolate')

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
    setTimeout(function(){
        console.log(value);
    },value * 1000);
}

// for(var i=0; i < 10; i += 1){
//     Looper(i);
// }
// Looper();



// for(var i=0; i < 10; i += 1){
//     setTimeout(() => {
//         console.log(i);
//     },1000);
// }


// const users ={ 1:'Bob', 2:'Arenita',3:'Don cangrejo' };
// users.forEach((usr)=>{
//     console.log(usr);
// })
// for in
// for(let usr in users){
//     if(users[usr]==='Arenita'){
//         users[usr]='Patricio';
//     }
//     // console.log(users[usr]);
// }



// // for each
// const drinks = ['coffee','sprite','tea','coke','pepsi'];
// // drinks.forEach((drk)=>{
// //     console.log(drk);
// // });
// for(let drk in drinks){
//     if(drinks[drk]==='tea')break;    
//     console.log(drinks[drk]);
// };


// for of
// console.clear();
const drinks = ['coffee','sprite','tea','coke','pepsi','Inka cola'];
const sayhi = 'hello world!';
const numbers = [1,2,3,4,5,6,7,8,9,10];
for(let drk of numbers){
    drk += 10;
    // console.log(drk);
}

const incrementox = (arr,incremento) => {
    for(let drk of arr){
        drk += incremento;
        console.log(drk);
    }   
};
// console.log(incrementox(numbers,50));


const originalArray = ['Bob','Bob','Arenita','Don cangrejo','Patricio','Plankton'];
const uniqueNameSet = new Set(originalArray);
for(const n of uniqueNameSet) console.log(n);


