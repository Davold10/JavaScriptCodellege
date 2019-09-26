//CAHSDOM
let WTF = document.getElementById('WTF');
let Printer = document.getElementById('Printer');
let ListPrinter = document.getElementById('ListPrinter');

//GLOBAL-VARIABLES
let NumbersFinal = "Sus numeros multiplicados por 0.5"
//LISTENERS
WTF.addEventListener('click', Creation);

//FUNCTIONS
Printer.style.display = "none";

function Creation() {
    let Numbers = [];
    for (let i = 0; i < 10; i++) {
        Numbers.push(Math.floor(Math.random() * 51) + 50)
    }
    Printer.style.display = "block";
    ListPrinter.innerText = `Sus numeros originales: ${Numbers}`
    Numbers.forEach(Multiply)

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let DivAlert = document.createElement('div');
    DivAlert.setAttribute('class', 'alert alert-success');

    let h4 = document.createElement('h4');
    h4.setAttribute('class', 'alert-heading');

    document.getElementById('lol').appendChild(DivCol);
    DivCol.appendChild(DivAlert);
    DivAlert.appendChild(h4);

    h4.innerText = `${NumbersFinal}`
}

function Multiply(item) {

    NumbersFinal += `${item * 0.5} ,`
}