//CASHDOM
let button = document.getElementById('button');
let impresora = document.getElementById('result');
let distacia = 0;
//LISTENERS
button.addEventListener('click',Distance)
//FUNCTIONS
function Distance(){
    distacia = (document.getElementById('speed').value)*(document.getElementById('time').value);
    impresora.innerHTML = distacia;
}