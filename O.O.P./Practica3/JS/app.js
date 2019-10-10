eventListeners();

let arrayPositionPrize = [];

function eventListeners() {
    document.addEventListener('keydown', MoveCar)
    document.getElementById('contenedor').addEventListener('click', SetPrize)
}
let car = new Car(0, 0);

function MoveCar(Event) {
    let image = document.getElementById('car');

    switch (Event.key) {
        case 'ArrowRight':
            car.MoveRight(image)
            break;
        case 'ArrowLeft':
            car.MoveLeft(image);
            break;
        case 'ArrowUp':
            car.MoveTop(image);
            break;
        case 'ArrowDown':
            car.MoveBottom(image);
            break;
    }
    if (arrayPositionPrize.length > 0) {
       let resultado = car.currentPosition(arrayPositionPrize, image);
        console.log(resultado);
        
    }
}

function SetPrize(event) {

    let prize = new Prize;
    prize.PositionX(event.clientX);
    prize.PositionY(event.clientY);

    arrayPositionPrize.push(prize.createElementImg());
    console.log(arrayPositionPrize);

}