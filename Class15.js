// exceptions

// const obj = [1,2,3,4];
// obj.map((obj) => console.log(obj));
// console.log('test');

function checkIfNum(x){
    if(isNaN(x)){
        throw 'This is not a number error!';
    }
    else{
        console.log(`The number is ${x}`);
    }
}
// checkIfNum();

const myObj = {
    toString: function(){
        return 'I am an object exception';
    }
};

// throw myObj;

function MyException(message){
    this.message = message;
    this.name = 'My exception'
    this.toString = function(){
        return this.name + ' ' + this.message;
    }
};
// throw new MyException('Missing data');

// const exception = new MyException('hi');
// console.log(exception);




// try catch

// try {
//     throw 'Exception';
// } catch (e) {
//     console.log(e);
// }


let num = 'help';
let error = [];

function isNum(x){
    if(isNaN(x)){
        throw 'Not a number';
    }else{
        console.log('Is Number');
    }
}

function errorHandler(e){
    error.push(e);
}

try {
    isNum(num);
} catch (error) {
    errorHandler(error);
}

// console.log(error);


function Mystring(string){
    if(typeof string === 'string'){
        this.value = string;
        this.getValue = function(){
            console.log('your string: ' + this.value + '');
        }
    }else{
        throw new StringExceptionError(string);
    }
}

function StringExceptionError(value){
    this.value = value;
    this.message = 'function requires a string';
    this.toString = function(){
        return this.value + ':' + this.message; 
    }
}

function verifyString(s){
    try {
        var str = new Mystring(s);
    } catch (error) {
        if(error instanceof StringExceptionError){
            console.log('string exception ' + error);
        }else{
            console.log('other exception');
        }
    } finally{
        always();
    }
    return str;
}

function always(){
    console.log('I alway run');
}
// const a = verifyString(2);
// a.getValue();
// const b = verifyString(true);


function finallyExample(){
    try {
        console.log('hi');
        throw 'test';
    } catch (error) {
        console.log(error);
        throw 'wow';
    }finally{
        console.log('Can i run?');
        return;
    }
}
console.log(finallyExample());