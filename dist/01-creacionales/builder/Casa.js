"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casa = void 0;
class Casa {
    tipoEstructura;
    pisos;
    piscina;
    garage;
    jardin;
    extras;
    //Se declaran los métodos Setters para que builder pueda establecer la casa paso a paso
    setTipoEstructura(tipoEstructura) {
        this.tipoEstructura = tipoEstructura;
    }
    setPisos(pisos) {
        this.pisos = pisos;
    }
    setPiscina(piscina) {
        this.piscina = piscina;
    }
    setGarage(garage) {
        this.garage = garage;
    }
    setJardin(jardin) {
        this.jardin = jardin;
    }
    mostrarCasa() {
        console.log(`Mostrar contrucción de la casa
            Tipo Estructura: ${this.tipoEstructura} 
            Pisos: ${this.pisos}
            Piscina: ${this.piscina}
            Garage: ${this.garage}
        `);
    }
}
exports.Casa = Casa;
