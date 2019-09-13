//CASHDOM
let btnAgregarArticulo = document.getElementById('btnAgregarArticulo');
let btnCalcularTotal = document.getElementById('btnCalcularTotal');

//LISTENERS
btnAgregarArticulo.addEventListener('click', AgregarInputArticulo);
btnCalcularTotal.addEventListener('click', calcularTotal);

//VARIABLES
let contador = 0;
let contadorPrecioArticulo = 0;

//FUNCTIONS
function AgregarInputArticulo() {
    contador++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let InputGroup = document.createElement('div');
    InputGroup.setAttribute('class', 'input-group mb-3');

    let InputArticulo = document.createElement('input');
    InputArticulo.setAttribute('type', 'text');
    InputArticulo.setAttribute('class', 'form-control');
    InputArticulo.setAttribute('placeholder', 'Ingresa el nombre del articulo');

    let inputGroupAppend = document.createElement('div');
    inputGroupAppend.setAttribute('class', 'input-group-append');

    let buttonAgregarPrecio = document.createElement('button');
    buttonAgregarPrecio.setAttribute('class', 'btn btn-outline-secondary');
    buttonAgregarPrecio.setAttribute('id', `btnAgregarPrecio${contador}`)
    buttonAgregarPrecio.appendChild(document.createTextNode('Agregar Precio'));

    let listaArticulos = document.getElementById('listaArticulos');
    listaArticulos.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(InputGroup);
    InputGroup.appendChild(InputArticulo);
    InputGroup.appendChild(inputGroupAppend);
    inputGroupAppend.appendChild(buttonAgregarPrecio);

    EventListenerAgregarPrecio();

}

function EventListenerAgregarPrecio() {

    let buttonAgregarPrecio = document.getElementById(`btnAgregarPrecio${contador}`)
    buttonAgregarPrecio.addEventListener('click', CrearInputPrecio);
}

function CrearInputPrecio(event) {
    contadorPrecioArticulo++;

    event.target.setAttribute('disabled', 'true');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let InputGroup = document.createElement('div');
    InputGroup.setAttribute('class', 'form-group mb-3');

    let InputPrecioArticulo = document.createElement('input');
    InputPrecioArticulo.setAttribute('type', 'number');
    InputPrecioArticulo.setAttribute('class', 'form-control');
    InputPrecioArticulo.setAttribute('placeholder', 'Ingresa el precio del articulo');
    InputPrecioArticulo.setAttribute('id', `valorArticulo${contadorPrecioArticulo}`)

    let listaArticulos = event.target.parentElement.parentElement.parentElement.parentElement;

    listaArticulos.appendChild(DivCol);
    DivCol.appendChild(InputGroup);
    InputGroup.appendChild(InputPrecioArticulo);
}

function calcularTotal() {
    let suma = 0;
    for (let i = 1; i <= contadorPrecioArticulo; i++) {
        let valorInput = Number(document.getElementById(`valorArticulo${i}`).value);

        if (valorInput >= 200) {
            suma += valorInput * 0.85;
        } else if (valorInput >= 100 && valorInput<200) {
            suma += valorInput * 0.88;
        } else if (valorInput<100){
            suma += valorInput * 0.90;
        }
    }
    
    let impresora = document.getElementById('imprimir');
    impresora.innerHTML = `<h4 class="alert-heading"> Su total es de: $${suma}</h4>`
}