//CASHDOM
let button = document.getElementById('boton');
let impresora = document.getElementById('result');
let areaSqu = 0;


//LISTENERS
button.addEventListener('click', Area);

//FUNCTIONS
function Area() {
    //AREA SQUARE
    areaSqu = (document.getElementById('LB').value) * (document.getElementById('LC').value);
    //AREA TRIANGLE
    areaTri = (((document.getElementById('LA').value) - (document.getElementById('LC').value)) * (document.getElementById('LB').value)) / 2;
    //AREA TOTAL
    areaTotal = areaSqu +areaTri;

    impresora.innerHTML=areaTotal;
}