class interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensje(mensaje, tipo, nombreGato, cantidadGasto) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if (tipo == 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(function () {
            document.querySelector('.primario .alert').remove
            nombreGato.disabled = false;
            cantidadGasto.disabled = false;
            formulario.reset();
        }, 3500);

    }

    agregarGastoListado(nombre, cantidad) {
        const gastoListados = document.querySelector('#gastos ul');
        const li = document.createElement('li');
        li.className = 'list-group-item  d-flex justify-content-between align-items-center';

        li.innerHTML = `${nombre}
        <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`
        gastoListados.appendChild(li);
    }

    presupuestoRestante(cantidad) {
        const restante = document.querySelector('span#restante');

        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);

        restante.innerHTML =`${presupuestoRestanteUsuario}`
    }
}