//CASHDOM
let button = document.getElementById('button');
let ladoA = document.getElementById('ladoA');
let ladoB = document.getElementById('ladoB');
let ladoC = document.getElementById('ladoC');
let imp = document.getElementById('result');
//LISTENERS
button.addEventListener('click', Identificar);
//FUNCTIONS
function Identificar() {
    if (ladoA.value==ladoB.value && ladoA.value==ladoC.value){
        imp.innerHTML = 'Equilátero';
        return;
    }
    if (ladoA.value != ladoB.value && ladoB.value != ladoC.value){
        imp.innerHTML = 'Escaleno';
        return;
    }
    imp.innerHTML = 'Isoceles';
}