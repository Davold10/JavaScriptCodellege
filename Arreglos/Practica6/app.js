//CASHODM
let InputNumbers = document.getElementById('InputNumbers');

//GLOBAL-VARIABLES
let ArrayLetras = [];
let PrintString = "";
FillArray();

//LISTENERS
InputNumbers.addEventListener('change', GetLetter)

//FUNCTIONS
function GetLetter(event) {
    let value = Number(InputNumbers.value);

    if (value >= 0 && value < 25) {

        PrintString += `<li class="list-group-item">${ArrayLetras[value]}</li>`
        document.getElementById('AlertPrint').innerHTML = PrintString;
    } else {
        Swal.fire({
            type: 'error',
            title: 'limite de rango',
            text: 'Favor de ingresar numeros entre 0  y 25'
        })
    }
    InputNumbers.value = ""
}

function FillArray() {
    for (let i = 0; i <= 25; i++) {
        ArrayLetras.push(String.fromCharCode(i + 65));
    }
}