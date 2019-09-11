//CASHDOM
let button = document.getElementById('button');
let Age = document.getElementById('ageButton');
let numeroInput = 0;

//LISTENERS
button.addEventListener('click', FormGroup);
Age.addEventListener('click', Promedio);

//FUNCTIONS
function FormGroup() {

    numeroInput++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let DivFG = document.createElement('div');
    DivFG.setAttribute('class', 'form-group');

    let label = document.createElement('label');
    let textLabel = document.createTextNode(`Ingresa la edad del alumno ${numeroInput}`);
    label.appendChild(textLabel);

    let input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('placeholder', 'Ingresa la edad del alumno');
    input.setAttribute('id', `EdadAlumno${numeroInput}`);

    let cajaAlumnos = document.getElementById('cajaAlumnos');
    cajaAlumnos.appendChild(DivRow)
    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFG);
    DivFG.appendChild(label);
    DivFG.appendChild(input);
}

function Promedio() {
    let suma = 0;
    let promedio = 0;
    for (let x = 1; x <= numeroInput; x++) {
        let edad = Number(document.getElementById(`EdadAlumno${x}`).value);
        suma += edad;
    }
    promedio = suma / numeroInput;

    let Imprimir = document.getElementById('imprimir');

    Imprimir.innerHTML = promedio.toFixed(2);
}