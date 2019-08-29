//CASHDOM
let btnCalcular = document.getElementById('btnCalcular');
let a = document.getElementById('inputOne');
let b = document.getElementById('inputTwo');
let r;

//LISTENERS
btnCalcular.addEventListener('click', Suma);

//FUNCTIONS
function Suma(){
    r=a+b;
    console.log(r);
    
}