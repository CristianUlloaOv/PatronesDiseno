"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Daga = void 0;
class Daga {
    nombre;
    material;
    constructor(nombre, material) {
        this.nombre = nombre;
        this.material = material;
    }
    atacar() {
        console.log(`Ataca con Daga con nombre ${this.nombre} y material ${this.material}`);
    }
}
exports.Daga = Daga;
