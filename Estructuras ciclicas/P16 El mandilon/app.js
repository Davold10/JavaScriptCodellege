//CASHDOM
let btnStart = document.getElementById('btnStart');
let cities = document.getElementById('cities');
//VARIABLES
CountCities = 1;
//LISTENERS
btnStart.addEventListener('click', addCities)
//FUNCTIONS
function addCities() {
    for (CountCities = 1; CountCities <= Number(cities.value); CountCities++) {
        let DivRow = document.createElement('div');
        DivRow.setAttribute('class', 'row');

        let DivCol = document.createElement('div');
        DivCol.setAttribute('class', 'col-12');

        let InputGroup = document.createElement('div');
        InputGroup.setAttribute('class', 'input-group mb-3');

        let InputArticulo = document.createElement('input');
        InputArticulo.setAttribute('type', 'text');
        InputArticulo.setAttribute('class', 'form-control');
        InputArticulo.setAttribute('placeholder', 'Ingresa la cantidad de tiendas en la ciudad');
        InputArticulo.setAttribute(`id`, `City${CountCities}`)

        let inputGroupAppend = document.createElement('div');
        inputGroupAppend.setAttribute('class', 'input-group-append');

        let btnAddCities = document.createElement('button');
        btnAddCities.setAttribute('class', 'btn btn-outline-secondary');
        btnAddCities.setAttribute('id', `btnAddCities${CountCities}`)
        btnAddCities.appendChild(document.createTextNode('Agregar tiendas'));

        let DivTiendas = document.createElement('div');
        DivTiendas.setAttribute(`id`, `TiendasCiudad${CountCities}`)

        let listaCiudades = document.getElementById('listCities');
        listaCiudades.appendChild(DivRow);
        DivRow.appendChild(DivCol);
        DivCol.appendChild(InputGroup);
        InputGroup.appendChild(InputArticulo);
        InputGroup.appendChild(inputGroupAppend);
        inputGroupAppend.appendChild(btnAddCities);
        listaCiudades.appendChild(DivTiendas);

        AddStoresListeners();

    }

}

function AddStoresListeners() {

    let btnAddCities = document.getElementById(`btnAddCities${CountCities}`)
    btnAddCities.addEventListener('click', AddStores);
}

function AddStores() {
    console.log(`It's all good homie in city ${}`);
}