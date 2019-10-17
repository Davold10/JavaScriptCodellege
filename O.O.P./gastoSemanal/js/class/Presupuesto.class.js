class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restatnte =  Number(presupuesto)
    }

    presupuestoRestante(cantidad = 0){
        return this.restatnte -= Number(cantidad);
    }
}