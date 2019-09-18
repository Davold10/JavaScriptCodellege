//CASHDOM
let numberInput = document.getElementById('numberInput');
let btnAdd = document.getElementById('btnAdd');
let btnResults = document.getElementById('btnResults');

//VARIABLES
let numberArray = [];
let positives = 0;
let positivesum = 0;
let totalsum = 0;
//LISTENERS
btnAdd.addEventListener('click', AddNumber);
btnResults.addEventListener('click', Results);

//FUNCTIONS
function AddNumber() {
    number = Number(numberInput.value);
    numberArray.push(number);
    console.log(numberArray);
    numberInput.value = ''
}

function Results() {
    for (let x = 0; x < numberArray.length; x++) {
        if (numberArray[x] > 0) {
            positives++;
            positivesum += numberArray[x];
        }
        totalsum += Math.abs(numberArray[x]);
    }
    let divRow =  document.createElement('div');
    divRow.setAttribute('class', 'row mt-3');

    let divCol =  document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let divAlert =  document.createElement('div');
    divAlert.setAttribute('class', 'alert alert-success');

    let h4 = document.createElement('h4');
    h4.setAttribute('class', 'alert-heading');
    h4.appendChild(document.createTextNode(`Numeros positivos: ${positives} Promedio de positivos: ${positivesum/positives} Promedio de valores absolutos: ${totalsum/numberArray.length}`))

    let printer = document.getElementById('print');
    printer.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divAlert);
    divAlert.appendChild(h4);

}