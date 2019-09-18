//CASHDOM
let input = document.getElementById('input');
let btnAdd = document.getElementById('btnAdd');
let btnResult = document.getElementById('btnResult');
let counter = document.getElementById('counter');

//GLOBAL-VARIABLES
let numbers = [];
let quantity = 0;
//LISTENERS
btnAdd.addEventListener('click', AddNumber);
btnResult.addEventListener('click', Results);

//FUNCTIONS
function AddNumber() {
    if (input.value != '' && quantity < 30) {
        let newnumber = Number(input.value);
        numbers.push(newnumber);
        quantity++;
        counter.innerText = `${quantity}`
        input.value = ''
        console.log(numbers.length);

    } else {
        alert('Input invalido o limite alcanzado')
    }
}

function Results() {
    let avg= 0
    let evenAVG = 0;
    let oddsum = 0;
    if (quantity == 30) {
        for (let x = 0; x < numbers.length; x++) {
            if (numbers[x] % 2 == 0) {
                evenAVG += numbers[x];
                avg++;
            } else {
                oddsum += numbers[x];
            }
        }
        let divRow = document.createElement('div');
        divRow.setAttribute('class', 'row mt-3');

        let divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12');

        let divAlert = document.createElement('div');
        divAlert.setAttribute('class', 'alert alert-success');

        let h4 = document.createElement('h4');
        h4.setAttribute('class', 'alert-heading');
        h4.appendChild(document.createTextNode(`Suma numeros impares ${oddsum} Promedio de pares: ${(evenAVG/avg).toFixed(2)} `))

        let printer = document.getElementById('printer');
        printer.appendChild(divRow);
        divRow.appendChild(divCol);
        divCol.appendChild(divAlert);
        divAlert.appendChild(h4);
    } else {
        alert('ingrese mas numeros')
    }
}