"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const Casa_1 = require("./Casa");
class Builder {
    resultado;
    //Método clasico en patron builder
    reiniciar() {
        this.resultado = new Casa_1.Casa();
    }
    construirEstructura(estructura) {
        this.resultado?.setTipoEstructura(estructura);
    }
    construirPisos(pisos) {
        this.resultado?.setPisos(pisos);
    }
    construirPiscina(piscina) {
        this.resultado?.setPiscina(piscina);
    }
    construirGarage(garage) {
        this.resultado?.setGarage(garage);
    }
    construirJardin(jardin) {
        this.resultado?.setJardin(jardin);
    }
    //Método clasico en patron builder
    obtenerCasa() {
        return this.resultado;
    }
}
exports.Builder = Builder;
