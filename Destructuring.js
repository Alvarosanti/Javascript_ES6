// lan spanish

// -What is the differences between destructuring an object and destructuring an array?
// Un objeto hace referencia a una sola cosa con sus respectivas propiedades segun sea el caso.
// Un array puede estar comprendido por un conjunto de objeto, ningun objeto o muchos objetos.


// -When would each be appropriate too use? In your own words, write 1 - 2 paragraphs explaining
//  the different use-cases for each.
// Es apropiado usar un objeto para poder definir una cosa con sus respectivas propiedades o 
// caracteristicas.
// A diferencia de un array que puede estar contenido por muchos objetos, este se puede utlizar
// tal vez para hacer un conjunto de informacion almacenada dentro de un array.

const obj1 = {dni:'73445543', fullname:'Bob Sponge', age:'13', loggedIn:new Date()};
const obj2 = {dni:'71234556', fullname:'Arenita', age:'18', loggedIn:new Date()};

function objetos(obj){
    const {dni:id ,fullname:name,age,loggedIn} = obj;
    console.log(`Soy ${name} con id: ${id} tengo ${age} años, mi ultimo acceso fue ${loggedIn}`);
};
// objetos(obj1);
// objetos(obj2);

const obj3 = {
    asunto: 'Carta Peruana',
    contenido: [
        {
            nombre: 'Lomo saltado',
            precio: '30',
            tipo: 'premium',
        },
        {
            nombre: 'Ceviche',
            precio: '35',
            tipo: 'premium +',
        },
        {
            nombre: 'Aji de gallina',
            precio: '25',
            tipo: 'Basic',
        },
        {
            nombre: 'Combinado',
            precio: '28',
            tipo: 'medium',
        },
    ],
    direccion: 'Lima, Peru',
};

const {nombre, contenido} = obj3;
    for(const {nombre} of contenido){
        console.log(`Platos del dia ${nombre}`);
    }




