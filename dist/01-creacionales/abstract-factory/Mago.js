"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const CapaMago_1 = require("./CapaMago");
const Daga_1 = require("./Daga");
class Mago {
    Arma(nombre, material) {
        return new Daga_1.Daga(nombre, material);
    }
    Armadura(nombre, material) {
        return new CapaMago_1.CapaMago(nombre, material);
    }
}
exports.Mago = Mago;
