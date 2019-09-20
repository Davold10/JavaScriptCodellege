//CASHDOM
let ArrayLenght = document.getElementById('ArrayLenght');
let btnFillArray = document.getElementById('btnFillArray');
let Print = document.getElementById('Print');

//VARIABLES
//LISTENERS
btnFillArray.addEventListener('click', FillArray);

//FUNCTIONS
/*=============================
 Inicia parte de aplicaion resuelta por medio de fuerza bruta
===============================*/
function FillArray() {
    let Numbers = [];
    let PrimeNumber = 0;
    let quantity = Number(ArrayLenght.value);
    let contadorfor=0;
    let max = 0;

    console.time('InicioFuerzaBruta');

    for (let x = 0; x < quantity; x++) {
        contadorfor++;
        PrimeNumber = isPrime();
        if (PrimeNumber == null) {
            x--
        } else {
            Numbers.push(PrimeNumber);
        }
        if(PrimeNumber>max){
            max = PrimeNumber
        }
    }
    console.timeEnd('InicioFuerzaBruta');
    console.log(contadorfor);
    
    console.log(Numbers);
    listArray(Numbers, max);
}

function isPrime() {
    value = Math.floor(Math.random() * 1001) + 1;
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return null;
        }
    }
    return value;
}
/*=============================
 Termina aplicacion Fuerza Bruta
===============================*/

function listArray(Numbers, max) {
    let informacionImprimir = "";

    let total = 0;
    for (i = 0; i < Numbers.length; i++) {
        informacionImprimir += `<li class"list-group-item mt-3"> Index: ${i} Valor: ${Numbers[i]}</li>`
    }
    informacionImprimir += `<li class"list-group-item mt-3"> Valor maximo en el array: ${max}</li>`
    Print.innerHTML = informacionImprimir
}
let ArrayNumberPrimeDinamyc=[];

function FillArrayDinamyc(){
    let PrimeNumbers = 0;

}