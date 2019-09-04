//CASHDOM
let button = document.getElementById('button');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let impresora = document.getElementById('result');
//LISTENERS
button.addEventListener('click', Comparar)
//FUNCTIONS
function Comparar() {
    console.log('wtf');
    
    if (n1.value > n2.value){
        impresora.innerHTML = n1.value
    } else {
        impresora.innerHTML = n2.value
    }
}