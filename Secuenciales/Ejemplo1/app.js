//CASHDOM
let btnCalcular = document.getElementById('btnCalcular');
let ImpResult = document.getElementById('Result');
let Result=0;

//LISTENERS
//Agregamos un listener a nuestro boton para la accion 'click' que ejecutara nuestra funcion suma
btnCalcular.addEventListener('click', Suma);

//FUNCTIONS
//Bloques de codigo  que se ejecuta hasta cuando se manada a llamar o se invoca, 
//mientras no sea invocada no realiza nunguna accion en el codigo
//La funcion suma tomara los valores de nuestros inputs one y two, los sumra y los guarda en la variable Result
function Suma() {
let InputOne = document.getElementById('inputOne').value;
let InputTwo = document.getElementById('inputTwo').value;
    Result = +InputOne + +InputTwo;
    console.log(Result, InputOne, InputTwo);  
//El meteodo innerhtml nos ayuda a mandar nuestra variable Result de JS a nuestro HTML visible para el usuario 
    ImpResult.innerHTML=Result;
}