// hw 3

function Name(fullname){
    const pattern = new RegExp('^[ A-Z]+$', 'i');
    const max = 40;
    let isvalid = false;
    if(!fullname){
        isvalid = false;
        console.log("Vacio")
    }else{
        if(fullname.lenght > max){
            isvalid = false;
            console.log("false in leng");
        }else{
            if(!pattern.test(fullname)){
                isvalid = false;
                console.log("false in pateern");
            }else{
                isvalid = true;
                console.log(fullname + " is a mortal" )
            }
        }
    }
}

function cake(flavour,chocolate){
    const cakes = []
    cakes.push(flavour);
    const a = cakes[0];
    if(a === "chocolate" && chocolate === true){
        console.log("flavour of the cake is chocolate")
        return true;
    }else{
        console.log("not chocolate")
        return false;
    }
}
cake("chocolate", true)

Name("socrates")