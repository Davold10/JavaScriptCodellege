const formulario = document.getElementById('agregar-gasto');

let cantidadPresupuesto;

eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', GuardarPresupuesto);
    document.addEventListener('DOMContentLoaded', IniciarAplicacion);
}

function GuardarPresupuesto(event) {
    event.preventDefault();

    const nombreGasto = document.querySelector('#gasto');
    const cantidadGasto = document.querySelector('#cantidad');

    nombreGasto.disabled = true;
    cantidadGasto.disabled = true;

    const ui = new interfaz();

    if (isNaN(cantidadGasto.value)) {
        ui.imprimirMensje('Solo datos numericos en cantidad', 'error', nombreGasto, cantidadGasto);
        return;
    }
    if (cantidadGasto.value === '' || nombreGasto.value === ''){
        ui.imprimirMensje('Hubo un error', 'error', nombreGasto, cantidadGasto);
        return;
    }
    ui.imprimirMensje('Correcto', 'Correcto', nombreGasto, cantidadGasto);
    ui.agregarGastoListado(nombreGasto.value, cantidadGasto.value);
    ui.presupuestoRestante(cantidadGasto.value);
}

async function IniciarAplicacion() {
    const {
        value: PresupuestoIngresado
    } = await Swal.fire({
        title: 'Ingrese presupuesto',
        input: 'number',
        inputPlaceholder: 'ingresa una cantidad'
    });

    if (!PresupuestoIngresado) {
        window.location.reload();
        return;
    }
    if (isNaN(PresupuestoIngresado)) {
        window.location.reload();
        return;
    }

    cantidadPresupuesto = new Presupuesto(PresupuestoIngresado);
    const ui = new interfaz();
    ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);


}