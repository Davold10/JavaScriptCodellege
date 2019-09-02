//CASHDOM
let button = document.getElementById('button');
let impresora = document.getElementById('result');
let puntos = 0;
//LISTENERS
button.addEventListener('click', Puntos);
//FUNCTIONS
function Puntos(){
    puntos = ((document.getElementById('aciertos').value)*4) +((document.getElementById('errores').value)*(-1));
    impresora.innerHTML = puntos;
}