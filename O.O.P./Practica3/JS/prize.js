class Prize {

    posicionX = 0;
    posicionY = 0;

    constructor() {

    }

    PositionX(posicionX) {
        this.posicionX = posicionX;
    }

    PositionY(posicionY) {
        this.posicionY = posicionY;
    }

    get GetPositionX() {
        return this.posicionX;
    }

    get GetPositionY() {
        return this.posicionY;
    }

    createElementImg() {

        let marginContainer = window.getComputedStyle(document.getElementById('contenedor'))

        let marginleft = marginContainer.getPropertyValue('margin-left');

        marginleft = marginleft.substring(0, marginleft-2);

        let ImageCreate = document.createElement('img');
        ImageCreate.setAttribute('src', '../img/Prize.png');
        ImageCreate.style.width = "75px"
        ImageCreate.style.left = `${this.posicionX-marginleft}px`;
        ImageCreate.style.top = `${this.posicionY}px`;

        document.getElementById('contenedor').appendChild(ImageCreate);

    }
}