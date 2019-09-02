//CASHDOM
let button = document.getElementById('boton');
let button2 = document.getElementById('boton2');
let impresora = document.getElementById('resultado');
let area=0;


//Listeners
button.addEventListener('click', Get_area);
button2.addEventListener('click', Get_area2);

//Functions
function Get_area(){
    console.time('Get_Area')
    area=Math.pow((document.getElementById('radio').value),2)*Math.PI;
    impresora.innerHTML=area.toFixed(2);
    console.timeEnd('Get_Area')
}
function Get_area2(){
    console.time('Get_area2')
    const PI = 3.141592653589793;
    let radio = Number(document.getElementById('radio').value);
    let resultado =0;
    resultado = PI * (radio*radio);
    impresora.innerHTML=resultado.toFixed(2);
    console.timeEnd('Get_area2')
}