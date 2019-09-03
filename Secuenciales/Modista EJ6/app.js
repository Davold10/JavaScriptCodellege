//CASHDOM
let button = document.getElementById('button');
let metros = document.getElementById('metros');
let impresora = document.getElementById('result');
let total = 0;

//LISTENERS
button.addEventListener('click' , Pulgadas)
//FUNCTIONS
function Pulgadas(){
    total =  metros.value * 39.3701;
    impresora.innerHTML = total
}