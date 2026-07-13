"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapaMago = void 0;
class CapaMago {
    nombre;
    material;
    constructor(nombre, material) {
        this.nombre = nombre;
        this.material = material;
    }
    defensa() {
        console.log(`Defensa armadura Capa Mago con nombre ${this.nombre} y material ${this.material}`);
    }
}
exports.CapaMago = CapaMago;
