/* import "core-js/stable";
import "regenerator-runtime/runtime";
import axios from "axios";

class Api{
    static async getUserInfo(username){
        const response = await axios.get(`https://api.github.com/users/${username}`);
       
        console.log(response);
    }
}

Api.getUserInfo('diego3g'); */
/* const minhaPromise = () => new Promise((resolve,reject)=>{
    setTimeout(()=> { resolve('OK')},2000);
});

 async function executaPromisse() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};
executaPromisse(); 

const executaPromisse = async () =>{
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
executaPromisse(); */

/* //object short syntax
const nome="Rafael";
const idade=25;

const usuario = {
    nome,
    idade,
    empresa : "VASP"
}
console.log(usuario); */
/* //template literals
const nome="Rafael";
const idade=25;

console.log(`Meu nome é ${nome}, e tenho ${idade} anos`)

 */
/* //operadores rest/spread
//REST
const usuario = {
    nome:"Diego",
    idade:23,
    empresa: 'Rocketseat'    
};

const {nome, ...resto} = usuario;

console.log(nome)
console.log(resto) */
//SPREAD
/* const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2]
console.log(arr3)

const usuario1 = {
    nome:'Diego',
    idade:23,
    empresa:"rocketseat",
};
const usuario2 = { ...usuario1, nome:"Rafael"};
console.log(usuario2) */

/* //desestrutursção em arrays
const usuario = {
    nome:  'Rafael',
    idade: 25,
    endereco:{
        cidade: 'Uberlândia',
        estado:'MG'
    },
};

const {nome , idade,endereco:{cidade}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade); */
/* const soma = (a = 3,b = 6) => a+b;
console.log(soma(1))
console.log(soma())

const arr = [1,3,4,5,6];

const newArr = arr.map( params => params *2);
console.log(newArr);


//a função map varre o vetor item por item executando uma função
const arr = [1,3,4,5,8,9];

const newArr = arr.map(function (item) {
    return item*2
})
console.log(newArr);

//reduce consome todo o vetor e tranforma em um único item, a ação é passada pela função
const sum  = arr.reduce(function (total,next) {
    return total + next;
});
console.log(sum);

//varre o array com uma função que retorna true or false
const filter = arr.filter(function (item) {
    return item %2 === 0;
});

console.log(filter)

//procura dentro do array a condição que retorna true para a função passada
const find = arr.find(function (item) {
    return item === 4;
});

console.log(find); */