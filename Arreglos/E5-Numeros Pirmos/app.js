//CASHDOM
let PrimeNumbersBtn = document.getElementById('PrimeNumbersBtn');
let Printer = document.getElementById('Printer');
//FUNCTIONS

//LISTENERS
PrimeNumbersBtn.addEventListener('click', OneThousand)
//GLOBAL-VARIABLES

function OneThousand() {
    let PrimeNumbers = [];
    let list = ""
    let count = 0;
    for (let i = 2; i <= 1000; i++) {
        let prime = true;
        for (let x = 2; x < i; x++) {
            if ((i % x) == 0) {
                prime = false;
            }
        }
        if (prime == true) {
            PrimeNumbers.push(i);
            list += `<li class="list-group-item"> ${PrimeNumbers[count]}</li>`
            count++
        }
    }
    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let DivAlert = document.createElement('ul');
    DivAlert.setAttribute('class', 'list-group list-group-flush');

    Printer.appendChild(DivCol);
    DivCol.appendChild(DivAlert);
    DivAlert.innerHTML = `${list}`
}