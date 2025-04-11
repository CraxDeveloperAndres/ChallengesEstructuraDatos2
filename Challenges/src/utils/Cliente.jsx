import Cola from './Cola';
import Stack from './Stack';

export default class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
        this.consultas = new Cola();
        this.reclamos = new Stack();
    }

    agregarConsulta(consulta) {
        this.consultas.enqueue(consulta);
    }

    agregarReclamo(reclamo) {
        this.reclamos.push(reclamo);
    }

    getConsultas() {
        return this.consultas.print();
    }

    getReclamos() {
        return this.reclamos.print();
    }
}
