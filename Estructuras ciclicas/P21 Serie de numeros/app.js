//CASHDOM
let btnList = document.getElementById('btnList');
let printer = document.getElementById('print')
//GLOBAL-VARIABLES
let number = 5;
let total = 5;

//LISTENERS
btnList.addEventListener('click', CreateList)

//FUNCTIONS
function CreateList() {

    let x = 2;
    
    while (total < 1800) {
        stop(number, total);

        if (x % 2 == 0) {
            number += 2;
        } else {
            number += 3;
        }
        total += number;
        x++;
    }
}


function stop(x, id) {

    return new Promise((res, rej) => {


        setTimeout(() => {

            res(PrintList(x, id))

        }, 200);


    })



}

function PrintList(x, total) {

    let Ul = document.createElement('ul');
    Ul.setAttribute('class', 'list-group list-group-flush');

    let Li = document.createElement('li');
    Li.setAttribute('class', 'list-group-item');
    Li.appendChild(document.createTextNode(`Numero: ${x}; Total: ${total}`));

    let Part = document.getElementById('print');
    Part.appendChild(Ul);
    Ul.appendChild(Li);

}