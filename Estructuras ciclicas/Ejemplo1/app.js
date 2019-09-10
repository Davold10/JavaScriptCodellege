//CASHDOM
Cantidades();
//LISTENERS

//FUNCTIONS
function Cantidades() {
    let y = 0;
    //Estructura cíclica la cual se compone de una variable inicializada , una condicion logica, incrementador
    //la cual nos ayuda a la ejecucion repetitiva de un bloque de código
    for (let x = 1; x <= 10; x++) {
        y += x;

        //Se crea el elemento por medio del metodo 'createElement' y se asigna a la variable 'newli'
        let newli = document.createElement('li');

        //Se le dan atributos 'id' y 'class' a nuestro elemento anterior
        newli.setAttribute("id", `listaN${x}`);
        newli.setAttribute("class", "list-group-item");

        //Se crea el nodo de texto por medio del metoto 'createTextNode'
        let newContent = document.createTextNode(y);

        //Se inserta un hijo por medio del metodo 'appenChild' a la variable newli
        newli.appendChild(newContent);

        let listaDesordenada = document.getElementById('listaNumerica');

        listaDesordenada.appendChild(newli);
    }
}