//CASHDOM
let button = document.getElementById('button');
let precio = document.getElementById('precio');
let metros = document.getElementById('metros');
let impresora = document.getElementById('result');
let total = 0;

//LISTENERS
button.addEventListener('click', Cotizar);

//FUNCTIONS
function Cotizar(){
    total = precio.value * metros.value;
    impresora.innerHTML = total;
}