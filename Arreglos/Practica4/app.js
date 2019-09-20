//CASHDOM
let ArrayLenght = document.getElementById('ArrayLenght');
let btnFillArray = document.getElementById('btnFillArray');
let Print = document.getElementById('Print');

//VARIABLES
//LISTENERS
btnFillArray.addEventListener('click', FillArray);

//FUNCTIONS
function FillArray() {
    let Numbers = [];

    let quantity = Number(ArrayLenght.value);

    for (i = 0; i < quantity; i++) {
        Numbers.push(Math.floor(Math.random() * 10));
    }
    listArray(Numbers);
}

function listArray(Numbers) {
    let informacionImprimir = "";

    let total = 0;
    for (i = 0; i < Numbers.length; i++) {
        informacionImprimir += `<li class"list-group-item"> Index: ${i} Valor: ${Numbers[i]}</li>`
        total+=Numbers[i];
    }
    informacionImprimir += `<li class"list-group-item"> Suma total de valores: ${total}</li>`
    Print.innerHTML = informacionImprimir
}