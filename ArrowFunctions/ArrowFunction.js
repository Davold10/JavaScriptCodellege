let Pokemons = [{
        name: "Pikachu",
        type: "Electrico",
        hp: 51,
    },
    {
        name: "Charmander",
        type: "Fuego",
        hp: 75,
    }, {
        name: "Bulbasur",
        type: "Planta",
        hp: 85,
    }, {
        name: "Squirtle",
        type: "Agua",
        hp: 100,
    }, {
        name: "Steelix",
        type: "Hierro-Roca",
        hp: 32,
    }, {
        name: "Magmar",
        type: "Fuego",
        hp: 53,
    },
    {
        name: "Electabuzz",
        type: "Electrico",
        hp: 90,
    }
];
let pokemonsArregloNuevo = [];

// pokemonsArregloNuevo = Pokemons.forEach(function (pokemon) {
//     return pokemon.name;

// })

// pokemonsArregloNuevo = Pokemons.find((pokemon) => {
//     if (pokemon.name == "Magmar") {
//         return pokemon;
//     }
// });
//find solo funciona para encontrar 1 dato del arreglo
// pokemonsArregloNuevo = Pokemons.find((pokemon) => pokemon.hp > 50);

//filter te regresa todos los datos que cumplan la condicion
//pokemonsArregloNuevo = Pokemons.filter((pokemon) => pokemon.hp < 50);

//Map: Crear un array con alguna condicion dada

// pokemonsArregloNuevo = Pokemons.map((pokemon) => pokemon.name === "Steelix" ? pokemon.hp : "Este Pokemon no existe");

//Every: retorna un booleano que pregunta que si todos los objetos cumplen una condicion

// let bandera = Pokemons.every((pokemon) => pokemon.hp > 50);

//Some: Minimo UNO tiene que cumplir una condicion. 
let bandera = Pokemons.some((pokemon) => pokemon.hp < 30);

console.log(bandera);