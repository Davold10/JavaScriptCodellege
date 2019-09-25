//CASHDOM
let InputNumber = document.getElementById('InputNumber');
let ListEvens = document.getElementById('ListEvens');
let Printer = document.getElementById('Printer')
//GLOBAL-VARIABLES
let Evens = [];
let list="";
let listFinal = "";
let NumberList = "";
//LISTENERS
InputNumber.addEventListener('change', CheckEvens);
ListEvens.addEventListener('click', CreateList);

//FUNCTIONS
CreatePrinter();

function CreatePrinter (){
    let DivCol =  document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let DivAlert = document.createElement('div');
    DivAlert.setAttribute('class','alert alert-success')

    let h4 = document.createElement('h4');
    h4.setAttribute('class', 'alert-heading');
    h4.setAttribute('id','ListPrinter')

    Printer.appendChild(DivCol);
    DivCol.appendChild(DivAlert);
    DivAlert.appendChild(h4);
}
function CheckEvens() {
    let number = Number(InputNumber.value);
    if (number % 2 == 0) {
        Evens.push(number);
    }
    InputNumber.value = ''
    list += `${number} ,`;
    document.getElementById('ListPrinter').innerHTML = list
}

function CreateList() {
    Evens.forEach(FinalList);
    Swal.fire({
        type: 'success',
        title: 'Sus numeros pares son:',
        html: `<ul class="list-group">${listFinal}</ul>`,
        footer: '<a href>Developed by DavidRomero</a>'
    })
}
function FinalList(item){
    listFinal +=`<li  class="list-group-item mt-1">${item} </li>`
}