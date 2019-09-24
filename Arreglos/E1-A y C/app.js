//CASHDOM
let NumberInput = document.getElementById('NumberInput');
let PrintAlert = document.getElementById('PrintAlert');
let btnSum = document.getElementById('btnSum');
let btnSubstraction = document.getElementById('btnSubstraction');
let btnMultiply = document.getElementById('btnMultiply');

//GLOBAL-VARIABLES
let NumbersA = [];
let NumbersB = [];
//LISTENERS
NumberInput.addEventListener('change', FillArray);
btnSum.addEventListener('click', Operations);
btnSubstraction.addEventListener('click', Operations);
btnMultiply.addEventListener('click', Operations)


//FUNCTIONS
function FillArray() {
    NumbersA = [];
    NumbersB = [];
    let value = Number(NumberInput.value);
    for (let i = 0; i < value; i++) {
        NumbersA.push(Math.floor(Math.random() * 201) - 100);
        NumbersB.push(Math.floor(Math.random() * 201) - 100)
    }
    PrintAlert.innerHTML = ` <h4 class="alert-heading"> Grupo de numeros A: ${NumbersA}</h4>`
    PrintAlert.innerHTML += ` <h4 class="alert-heading"> Grupo de numeros B: ${NumbersB}</h4>`
}

function Operations(event) {
    if (NumbersA.length > 0) {
        let omg = event.target.value

        let A = NumbersA[Math.floor(Math.random() * NumbersA.length)];
        let B = NumbersB[Math.floor(Math.random() * NumbersB.length)];
        let result = 0;
        let what = ``;
        if (omg == "1") {
            result = A + B;
            what = `Suma de ${A} + ${B}`
        }
        if (omg == "2") {
            result = A - B;
            what = `Resta de ${A} - ${B}`
            console.log();
        }
        if (omg == "3") {
            result = A * B;
            what = `Multiplicacion de ${A} * ${B}`
        }
        Swal.fire({
            type: 'info',
            title: `${what}`,
            text: `${result}`
        })
    } else {
        Swal.fire({
            type: 'error',
            title: 'Arreglos vacios',
            text: 'Ingrese un numero en el campo anterior'
        })
    }
}