//CASHDOM
let valorInput = document.getElementById('AgregarElemento')
let btnAgregarElementos = document.getElementById('btnAgregarElemento');
let btnMostrarElementos = document.getElementById('MostrarElementos');
//GLOBAL-VARIABLES
let elementos = [];
let contador = 0;
//LISTENERS
btnAgregarElementos.addEventListener('click', AgregarElementos);
btnMostrarElementos.addEventListener('click', MostrarElementos);
//FUNCTIONS
function AgregarElementos() {
    if (contador < 10) {
        elementos[contador] = valorInput.value;
        contador++;
    }
    valorInput.value = "";
}

function MostrarElementos() {
    let informacionImprimir = "";
    for (let i = 0; i < elementos.length; i++) {

        informacionImprimir += `<li class"list-group-item">${elementos[i]}</li>`

    }
    contador = 0;
    document.getElementById('listaImprimir').innerHTML = informacionImprimir
}