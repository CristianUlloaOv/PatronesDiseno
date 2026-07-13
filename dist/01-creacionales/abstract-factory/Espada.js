"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espada = void 0;
class Espada {
    nombre;
    material;
    constructor(nombre, material) {
        this.nombre = nombre;
        this.material = material;
    }
    atacar() {
        console.log("Ataca con espada ", this.nombre);
    }
}
exports.Espada = Espada;
