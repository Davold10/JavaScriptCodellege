//CASHDOM
let button = document.getElementById('button');
let H1 = document.getElementById('H1');
let H2 = document.getElementById('H2');
let impresora = document.getElementById('result');
//LISTENERS
button.addEventListener('click' , Comparar);
//FUNCTIOS
function Comparar(){
    if (H1.value>H2.value) {
        impresora.innerHTML = 'Hermano A';
        return;
    }
    if (H1.value<H2.value) {
        impresora.innerHTML = 'Hermano B';
        return;
    }
    impresora.innerHTML = 'Ambos tienen la misma edad'
}
