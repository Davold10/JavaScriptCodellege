///CASHDOM
let button = document.getElementById('button');
let art = document.getElementById('name');
let code = document.getElementById('code');
let price = document.getElementById('price');
let disco = document.getElementById('disco');
let imp = document.getElementById('result');

//LISTENERS
disco.addEventListener('blur', big)
//FUNCTIONS
function big() {
    if (disco.value != 01 && disco.value != 02) {
        event.target.focus();
    } else {
        button.addEventListener('click', Descuento);
    }
}

function Descuento() {
    console.log(disco.value);

    if (disco.value == 01) {
        diez();
        return;
    }
    veinte();
}

function diez() {
    imp.innerHTML = art.value + ' ' + code.value + ' $' + (price.value * 0.9)
}

function veinte() {
    imp.innerHTML = art.value + ' ' + code.value + ' $' + (price.value * 0.8)
}