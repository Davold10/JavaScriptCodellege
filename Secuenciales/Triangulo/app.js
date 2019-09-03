//CASHDOM
let button = document.getElementById('button');
let la = document.getElementById('la');
let lb = document.getElementById('lb');
let lc = document.getElementById('lc');
let impresora = document.getElementById('result');
let Semi = 0;
let Area = 0;

//LISTENERS
button.addEventListener('click', Area_Semi);
//FUNCTIONS
function Area_Semi(){    
    Semi = (+la.value + +lb.value + +lc.value)/2;
    Area = Math.sqrt(Semi*(Semi-la.value)*(Semi-lb.value)*(Semi-lc.value));
    impresora.innerHTML = Area.toFixed(2);
}