//CASHDOM
let agregar = document.getElementById('Agregar');
let promedio = document.getElementById('Promedio');
let suma = 0;
let average = 0;
let counter = 0;


//LISTENERS

agregar.addEventListener('click', add);
promedio.addEventListener('click', avg);

//FUNCTIONS
function add() {
    counter++
    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let DivFG = document.createElement('div');
    DivFG.setAttribute('class', 'form-group');

    let label = document.createElement('label');
    let Texr_Label = document.createTextNode(`Ingresa la edad del alumno ${counter}`);
    label.appendChild(Texr_Label);

    let input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('placeholder', 'Ingrese estatura en m');
    input.setAttribute('id', `estatura${counter}`);

    let inputs = document.getElementById('inputs');
    inputs.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFG);
    DivFG.appendChild(label);
    DivFG.appendChild(input);

}

function avg() {
    for (let x = 1; x <= counter; x++) {
        let heights = document.getElementById(`estatura${x}`)
        let estatura = Number(heights.value);
        suma += estatura;
    }
    average = suma / counter;

    let DivAAS = document.createElement('div');
    DivAAS.setAttribute('class', 'alert alert-success');
    DivAAS.setAttribute('role', 'alert');

    let h4 = document.createElement('h4');
    h4.setAttribute('class', 'alert-heading');
    let Text_Result = document.createTextNode(`El promedio de estaturas de tus ${counter} personas es ${average}`);
    h4.appendChild(Text_Result);

    let printer = document.getElementById('printer');
    printer.appendChild(DivAAS);
    DivAAS.appendChild(h4);

}