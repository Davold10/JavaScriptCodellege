//CASHDOM
let InputNumbers = document.getElementById('InputNumbers');
let btnPrint = document.getElementById('btnPrint');
let btnAddNumber = document.getElementById('btnAddNumber');

//GLOBAL-VARIABLES
elementos = [];
//LISTENERS
btnPrint.addEventListener('click', Print_Elements);
btnAddNumber.addEventListener('click', addElement);

//FUNCTIONS
function addElement() {
    let i = 0;
    for (i =0; i < elementos.length; i++) {
        if (Number(InputNumbers.value) === elementos[i]) {
            alert('Numero ya existente');
            InputNumbers.value = '';
            return;
        }
    }
    elementos.push(Number(InputNumbers.value));
    InputNumbers.value = '';
    console.log(elementos);

}

function Print_Elements() {
    console.log('welcome to Print_Elements');

    let datosImprimir = '';

    for (let x = 0; x < elementos.length; x++) {
        datosImprimir += `<li class"list-group-item">${elementos[x]}</li>`
    }
    document.getElementById('Print').innerHTML = datosImprimir;
    console.log('jajaja que pendejo');
    
}