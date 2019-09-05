//CASHDOM
let button = document.getElementById('button');
let N1 = document.getElementById('N1');
let N2 = document.getElementById('N2');
let N3 = document.getElementById('N3');
let imp = document.getElementById('result');
//LISTENERS
button.addEventListener('click', Comparar);
//FUNCTIONS
function Comparar() {
    if (N1.value > N2.value && N1.value > N3.value) {
        imp.innerHTML = `
        <h4 class="alert-heading text-info text-center"> El numeroA: ${N1.value} es el mayor </h4>
        `
        return;
    }
    if (N2.value > N1.value && N2.value > N3.value) {
        imp.innerHTML = `
        <h4 class="alert-heading text-info text-center"> El numeroB: ${N2.value} es el mayor </h4>
        `
        return;
    }
        imp.innerHTML = `
        <h4 class="alert-heading text-info text-center"> El numeroC: ${N3.value} es el mayor </h4>
        `
        return;

}