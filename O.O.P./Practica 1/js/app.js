let Velocity = document.getElementById('Velocity');
let Degrees = document.getElementById('Degrees');
let StartBtn = document.getElementById('StartBtn')

StartBtn.addEventListener('click',Draw)

function Draw(){
let proyectil = new Proyectil(Number(Degrees.value), Number(Velocity.value));
console.log(proyectil.velocidadInicial);
console.log(proyectil.angulo);
for (let tiempo = 0; tiempo <= 10; tiempo += 0.01) {
    let posicionX = proyectil.calcularVelocidadX(tiempo);
    let posicionY = proyectil.calcularVelocidadY(tiempo);
    if (posicionX >= 0 && posicionY >= 0 && posicionY <= 100 && posicionX <= 100) {
        proyectil.crearSpan(posicionX, posicionY);
    }
}}