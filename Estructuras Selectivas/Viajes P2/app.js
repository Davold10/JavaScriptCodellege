//CASHDOM
let people = document.getElementById('people');
let distance = document.getElementById('distance');
let bus = document.getElementById('bus');
let button = document.getElementById('button');
let result = document.getElementById('result');
let cost = 0;
let coperacha = 0;
//LISTENERS
button.addEventListener('click', Viaje);
//FUNCTIONS
function Viaje() {
    coperacha = people.value;

    if (people.value < 20) {
        coperacha = 20;
    }

    if (bus.value == 'A') {
        result.innerHTML = `<h4 class="alert-heading"> Costo total: $ ${1.5*distance.value} Para ${coperacha} personas: $ ${((1.5*distance.value)/coperacha).toFixed(2)}</h4>`
        return;
    }
    if (bus.value == 'B') {
        result.innerHTML = `<h4 class="alert-heading"> Costo total: $ ${2.0*distance.value} Para ${coperacha} personas: $ ${((2.0*distance.value)/coperacha).toFixed(2)}</h4>`
        return;
    }
    if (bus.value == 'C') {
        result.innerHTML = `<h4 class="alert-heading"> Costo total: $ ${2.5*distance.value} Para ${coperacha} personas: $ ${((2.5*distance.value)/coperacha).toFixed(2)}</h4>`
        return;
    }
    if (bus.value == 'D') {
        result.innerHTML = `<h4 class="alert-heading"> Costo total: $ ${3.0*distance.value} Para ${coperacha} personas: $ ${((3.0*distance.value)/coperacha).toFixed(2)}</h4>`
        return;
    }

    result.innerHTML = `<h4 class="alert-heading"> Ingrese un autubus valido</h4>`
}