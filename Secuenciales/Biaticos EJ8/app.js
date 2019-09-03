//CASHDOM
let button = document.getElementById('button');
let days = document.getElementById('days');
let food = document.getElementById('food');
let hotel = document.getElementById('hotel');
let total = 0;
//LISTENERS
button.addEventListener('click', Biaticos);
//FUNCTIONS
function Biaticos(){
    total = (100+ +food.value + +hotel.value)*days.value;
    document.getElementById('result').innerHTML = total;
}