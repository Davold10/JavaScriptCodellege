//CASHDOM
let CalcButton = document.getElementById('Calcular');
let Impresora = document.getElementById('costo')
//VARIBLES
let costo =0;

//LISTENERS
CalcButton.addEventListener('click' , cotizacion)

//FUNCTIONS
function cotizacion(){
    let m2 = document.getElementById('metros').value;
    let precio = document.getElementById('precio').value;
    costo = m2 * precio;
    Impresora.innerHTML = '$ ' + costo;
}