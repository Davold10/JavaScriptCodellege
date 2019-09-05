//CASHDOM
let inputNumber = document.getElementById('number');
let imp = document.getElementById('result');
//LISTENERS
inputNumber.addEventListener('keypress', Cifrado);
inputNumber.addEventListener('blur', Cifrado2);
//FUNCTIONS
function Cifrado(event){
    if(event.key == 'Enter'){
        if (inputNumber.value > 999){
            imp.innerHTML = `<h4 class="alert-heading"> No sea mamon &#129324;
            </h4>`
        }
        if(inputNumber.value <= 999){
            imp.innerHTML = `<h4 class="alert-heading">Numero de 3 cifras</h4>`
        }
        if (inputNumber.value <= 99){
            imp.innerHTML = `<h4 class="alert-heading">Numero de 2 cifras</h4>`
        }
        if (inputNumber.value <= 9){
            imp.innerHTML = `<h4 class="alert-heading">Numero de 1 cifra</h4>`
        }
    }
}
function Cifrado2(){
    if (inputNumber.value <= 9){
        imp.innerHTML = `<h4 class="alert-heading">Numero de 1 cifra</h4>`
        return;
    }
    if (inputNumber.value <= 99){
        imp.innerHTML = `<h4 class="alert-heading">Numero de 2 cifras</h4>`
        return;
    }
    if(inputNumber.value <= 999){
        imp.innerHTML = `<h4 class="alert-heading">Numero de 3 cifras</h4>`
        return;
    }
    if (inputNumber.value > 999){
        imp.innerHTML = `<h4 class="alert-heading"> No sea mamon &#129324;
        </h4>`
        return;
    }
}