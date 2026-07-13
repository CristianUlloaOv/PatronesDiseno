"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yorio = void 0;
class Yorio {
    nombre;
    material;
    constructor(nombre, material) {
        this.nombre = nombre;
        this.material = material;
    }
    defensa() {
        console.log(`Defensa armadura Yoroi con nombre ${this.nombre} y material ${this.material}`);
    }
}
exports.Yorio = Yorio;
