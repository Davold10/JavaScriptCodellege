//CASHDOM
let calcular = document.getElementById('Calcular');
let Result = document.getElementById('Result');
let area = 0;

//LISTENERS
eventListener();

//FUNCIONES
function Area(){
    let b = document.getElementById('base').value;
    let a = document.getElementById('altura').value;
    area = (b*a)/2;
    console.log(area);
    
    Result.innerHTML = area;
}
function eventListener(){
    calcular.addEventListener('click', Area);
}