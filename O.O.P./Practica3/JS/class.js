class Car {
    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    MoveRight(Img) {
        Img.src = "../img/SmallCar.png"
        Img.style.width = "55px"
        Img.style.height = "26px"
        if (this.posicionX < 95) {
            Img.style.left = (this.posicionX++) + "%"
            console.log(this.posicionX, this.posicionY);
        }
    }
    MoveLeft(Img) {
        Img.src = "../img/SmallCar3.png"
        Img.style.width = "55px"
        Img.style.height = "26px"
        if (this.posicionX > 0) {
            Img.style.left = (this.posicionX--) + "%"
            console.log(this.posicionX, this.posicionY);
        }
    }
    MoveTop(Img) {
        Img.src = "../img/SmallCar4.png"
        Img.style.height = "55px"
        Img.style.width = "26px"
        if (this.posicionY > 0) {
            Img.style.top = (this.posicionY--) + "%"
            console.log(this.posicionX, this.posicionY);
        }
    }
    MoveBottom(Img) {
        Img.src = "../img/SmallCar2.png"
        Img.style.height = "55px"
        Img.style.width = "26px"
        if (this.posicionY <= 93) {
            Img.style.top = (this.posicionY++) + "%"
            // console.log(this.posicionX, this.posicionY);
        }
    }
    currentPosition(arrayPositionPrize, image) {

        let PositionCarX = image.x;
        let PositionCarY = image.y;

        for (let i = 0; i < arrayPositionPrize.length; i++) {
            let PositionXPrize = arrayPositionPrize[i].posX;
            let PositionYPrize = arrayPositionPrize[i].posY;
            console.log(`Coordenadas carrito`, PositionCarX-150, PositionCarY);
            console.log(`Coordenadas DEL PUTO GATO`, PositionXPrize, PositionYPrize);

            if (PositionCarX-150 >= PositionXPrize - 10 && PositionCarX-150 <= PositionXPrize + 10 && PositionCarY >= PositionYPrize - 10 && PositionCarY <= PositionYPrize + 10) {
                return true;
            }
        }
        return false;
    }
}