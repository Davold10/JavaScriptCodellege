//CASHDOM
let button = document.getElementById('button');
let ca = document.getElementById('ca');
let cb = document.getElementById('cb');
let hipo = 0;

//LISTENERS
button.addEventListener('click', Hipotenusa);

//FUNCTIONS
function Hipotenusa(){
    hipo = Math.sqrt(Math.pow(ca.value , 2)+Math.pow(cb.value , 2));
    document.getElementById('result').innerHTML = hipo.toFixed(2);
}