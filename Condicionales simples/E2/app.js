//CASHDOM
let button = document.getElementById('button');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let impresora = document.getElementById('result');
//LISTENERS
n1.addEventListener('blur', big)
n2.addEventListener('blur', big)
button.addEventListener('click', Comparar)
//FUNCTIONS
function big(){
    if(isNaN(event.target.value)){
        event.target.focus();
    }
}
function Comparar() {
    if (n1.value > n2.value){
        impresora.innerHTML = n1.value;
    } else if (n1.value < n2.value){
        impresora.innerHTML = n2.value;
    } else {
        impresora.innerHTML = 'Los numeros tienen el mismo valor'
    }
}