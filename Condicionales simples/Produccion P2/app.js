//CASHDOM
let button = document.getElementById('button');
let d1 = document.getElementById('Monday');
let d2 = document.getElementById('Tuesday');
let d3 = document.getElementById('Wednesday');
let d4 = document.getElementById('Thursday');
let d5 = document.getElementById('Friday');
let d6 = document.getElementById('Saturday');
let imp = document.getElementById('result');
let avg = 0;
//LISTENERS
button.addEventListener('click', Bonos);
//FUNCTIONS
function Bonos() {

    avg = (+d1.value + +d2.value + +d3.value + +d4.value + +d5.value + +d6.value) / 6;
    if(avg>=100){
        imp.innerHTML = 'Si';
        return;
    }
    imp.innerHTML = 'No'
}