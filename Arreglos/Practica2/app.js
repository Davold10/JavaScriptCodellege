//CASHDOM
let valorInput = document.getElementById('AgregarElemento')
let btnAgregarElementos = document.getElementById('btnAgregarElemento');
let btnMostrarElementos = document.getElementById('MostrarElementos');

//GLOBAL-VARIABLES
let elementos = [];
let contador = 0;

//LISTENERS
btnAgregarElementos.addEventListener('click', AgregarElementos);
btnMostrarElementos.addEventListener('click', Average);

//FUNCTIONS
function AgregarElementos() {
    if (contador < 10) {
        elementos[contador] = Number(valorInput.value);
        contador++;
    }
    valorInput.value = "";
}

function Average() {
    let promedio = 0;
    for (let x = 0; x < elementos.length; x++) {
        promedio += elementos[x];
    }
    promedio /= elementos.length;

    contador = 0;
    elementos = [];

    let Imprimir = `<li class"list-group-item">El promedio de los numeros otorgados es: ${promedio}</li>`
    document.getElementById('listaImprimir').innerHTML = Imprimir
}