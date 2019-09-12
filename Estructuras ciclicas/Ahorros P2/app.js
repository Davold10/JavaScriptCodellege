//CASHDOM
let btnAgregarAhorro = document.getElementById('buttonAgregarAhorro');
let contador = 0;


//LISTENERS
btnAgregarAhorro.addEventListener('click', AgregarAhorro);

//FUNCTIONS
function AgregarAhorro() {
    if (contador < 12) {
        contador++;

        let ahorro = Number(document.getElementById('ahorroMensual').value);

        let spanAhorro = document.createElement('span');
        spanAhorro.setAttribute('id', `AhorroMensual${contador}`)
        let textoSpan = document.createTextNode(`${ahorro}`);
        spanAhorro.appendChild(textoSpan);

        let ImprimirSpan = document.getElementById(`mes${contador}`)
        ImprimirSpan.appendChild(spanAhorro);

        calcularAhorro();
    }
}

function calcularAhorro(){
    console.log('Wassup bro');
    
    let suma= 0;
    
    for(let i=1; i <= contador; i++){
        let ValorObtenido = Number(document.getElementById(`AhorroMensual${i}`).textContent);
        suma+=ValorObtenido;
        
    }
    let impirmirAhorroTotal = document.getElementById('total');
    impirmirAhorroTotal.innerHTML=`<span> Total: $${suma}</span>`
}