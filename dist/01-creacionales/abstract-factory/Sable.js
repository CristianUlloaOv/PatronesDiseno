"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sable = void 0;
class Sable {
    nombre;
    material;
    constructor(nombre, material) {
        this.nombre = nombre;
        this.material = material;
    }
    atacar() {
        console.log("Sable con espada con nombre: ", this.nombre);
    }
}
exports.Sable = Sable;
