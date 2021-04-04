// destructuring

// const myArray = new Array();
// myArray[0] = 1;
// console.log(myArray);

function foodFilter(arr,term){
    return arr.filter((t)=> t === term);
}
// const result = foodFilter(['arroz con pollo','chaufa','aji de gallina','lomo saltao'],'arroz con pollo');
// console.log(result);

// const anotherarray = [10,20,30,40,50,60,70];

// const [primero,segundo, ...resto] = anotherarray;
// console.log(primero);
// console.log(segundo);
// console.log(resto);


const myobj = {firstname: 'Bob', lastname: 'sponge', age:22};
// let name = myobj.firstname;
// let lastname = myobj.lastname;
// let age = myobj.age;

// console.log(name,lastname,age);

let {firstname,lastname,age} = myobj;
// console.log(firstname,lastname,age);

let var1,var2;
const obj = {var1: 'a', var2: 'b'};
({var1,var2} = obj);
// console.log(obj);

const obj2 = {a:'sonrie', b: 'llora', c: 'calla'};
// reasigna valor de la variable
const{a:aa,b,c} = obj2;
// console.log(aa,b,c);

const obj3 = {uid: '201611911', uname: 'Bob sponge', loggedIn:new Date()};
const {uid:UserId,uname:UserName,loggedIn:LastLogin} = obj3;
// console.log(LastLogin);

function stateUser({user = 'Arenita',memberType}){
    console.log(`Username ${user}, memberType ${memberType}`);
}
// stateUser({memberType: 'Premium'});

function stateUser1(obj){
    const {user = null,memberType = 'basic'} = obj;
    if(!user){
        console.log('ERROR!!')
    }else{
        console.log(`Username ${user}, memberType ${memberType}`);
    }
}
const user1 = ({user: 'Plankton', memberType: 'Premium'});
const user2 = ({user: 'Arenita', memberType: 'Free'})

// stateUser1(user1);
// stateUser1(user2);

function SayIfValid({prop: s}){
    console.log(s);
}
const obj4 = {
    prop: 'I am valid',
    proop: 'I am not valid',
    alll: 'I am also not valid',
}
// SayIfValid(obj4);

const obj5 = {
    tittle: 'Crustace cascarudo',
    entries: [
        {
            name: 'Bob',
            number: '123123123',
            address: 'jr fake st 123'
        },
        {
            name: 'Arenita',
            number: '333222111',
            address: 'jr fake st 332'
        },
    ],
    myPhone: '321321321',
}

const {tittle,entries} = obj5;
    for(const {name,address} of entries){
        // console.log(`nombres ${name} and direccions ${address}`);
    }
// console.clear()
const obj6 = {
    prop1: 'TEST',
    prop2: [10,20],
}

const {prop1,prop2:[xx,yy]} = obj6
// console.log(xx, yy);




