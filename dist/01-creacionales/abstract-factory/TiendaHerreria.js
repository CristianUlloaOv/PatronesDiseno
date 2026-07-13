"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendaHerreria = void 0;
class TiendaHerreria {
    IHerreria;
    constructor(IHerreria) {
        this.IHerreria = IHerreria;
    }
    mostrarGuerrero(nombreArma, materialArma, nombreArmadura, materialArmadura) {
        const arma = this.IHerreria.Arma(nombreArma, materialArma);
        const armadura = this.IHerreria.Armadura(nombreArmadura, materialArmadura);
        arma.atacar();
        armadura.defensa();
    }
}
exports.TiendaHerreria = TiendaHerreria;
