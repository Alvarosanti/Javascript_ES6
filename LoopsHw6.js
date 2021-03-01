// fizzbuzz
console.clear()
console.log('=========================================')
console.log('=================FizzBuzz2====================')
console.log('=========================================')
const elementos = 100;
const primos = [];
const noprimos= [];


    for(var i=2; i <= elementos ;i++){
        let primo = true;
        for(var x=2; x < i ;x++){
            if( i % x === 0){
                noprimos.push(i);
                primo = !primo;
                break;
            } 
        }
        if(primo) primos.push(i);
    }
    for(let pri in primos){
        console.log(`Prime ${primos[pri]}`);
    }
    
    for(let nopri in noprimos){
        if(noprimos[nopri]%3===0 && noprimos[nopri]%5===0) {
            console.log(`Fizz Buzz ${noprimos[nopri]}`);
        }
        else if(noprimos[nopri]%3===0) {
            console.log(`Fizz ${noprimos[nopri]}`);
        }
        else if(noprimos[nopri]%5===0){ 
            console.log(`Buzz ${noprimos[nopri]}`);
        }
    }
    console.log('PRIMOS',primos);
    console.log('NO PRIMOS',noprimos);
    
    

