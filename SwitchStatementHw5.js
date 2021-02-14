// homework 5 switch statements
function timeAdder(value1,label1,value2,label2){
    let result;
    result = (value1 + value2);

    switch(value1){
        case value1:
            if (result === 24 && label1 ==="horas" && label2 ==="horas"){
                console.log("1 dia")
                break;
            }else{
                console.log("false");
            }
        case value1:
            result = [value1 + value2, label1];
            console.log(result);
            return;
        default:
            return "nothing"
    }
}
    const inputs = (num,label1,value2,label2) =>{
        let result = num + value2;    
        const pattern = new RegExp('^[ 0-9]+$', 'i');
        const input = timeAdder(num,label1,value2,label2);
    // if(!input){
    //     console.log("Invalid en input!");
    // }
    if(!pattern.test(num)){
        console.log("Invalid en pattern");
        return false;
    }else{
        console.log("The time in " + label1  + " is " + result);
    }
}
inputs(12,"horas",12,"horas");