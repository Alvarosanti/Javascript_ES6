// Homework #11

// const array = ['one','two','three'];
// const reversed = array.reverse();
// // console.log(reversed);

// const myJson = '["one","two","three"]';
// // console.log(myJson);

// const  a = JSON.parse(myJson);
// console.log(a);


function reverseJsonArray(Myjson){
    if(typeof Myjson === 'string'){
        const a = JSON.parse(Myjson);
        const b = a.reverse();
        const c = JSON.stringify(b);
        console.log(`Reverse: ${c}`);
    }else{
        throw new JSONExceptionError(Myjson);
    }
}

function JSONExceptionError(val){
    this.val = val;
    this.mesage = 'function requires a JSON file';
    this.toString = function(){
        return `[${this.val}]`+ ' : ' + this.mesage;

    }
}

function verifyJson(input){
    try {
        var str = reverseJsonArray(input);
    } catch (error) {
        if(error instanceof JSONExceptionError){
            console.log('JSON Exception '+ error);
            return false;
        }
    }
}

verifyJson('["one","two","three","Four"]');
verifyJson(123);
verifyJson();
verifyJson('');
verifyJson(false);
verifyJson([1,2,3,4]);

// console.clear();