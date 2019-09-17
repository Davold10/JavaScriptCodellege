//CASHDOM
let btnSalary = document.getElementById('btnSalary');

//GLOBAL-VARIABLES
let salary = 1500;
//LISTENERS
btnSalary.addEventListener('click', CalcSalary);

//FUNCTIONS
function CalcSalary() {
    let x = 1;
    PrintSalary(salary, x);
    x++
    for (x; x<=6; x++) {
        salary += salary*1.10;
        PrintSalary(salary, x);
    }
}

function PrintSalary(salary, month) {
    let mes = 'meses';
    if (month == 1) {
        mes = 'mes'
    }
    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let DivAAS = document.createElement('div');
    DivAAS.setAttribute('class', 'alert alert-primary');

    let h4 = document.createElement('h4');
    h4.appendChild(document.createTextNode(`Salario a ${month} ${mes}: $${salary.toFixed(2)}`));

    let Printer = document.getElementById('printer');

    Printer.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivAAS);
    DivAAS.appendChild(h4);
}