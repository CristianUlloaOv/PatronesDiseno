"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Samurai = void 0;
const Sable_1 = require("./Sable");
const Yorio_1 = require("./Yorio");
class Samurai {
    /*private arma: IArma;
    private armadura: IArmadura;

    constructor(arma: IArma, armadura: IArmadura){
        this.arma = arma;
        this.armadura = armadura;
    }

    Arma(): IArma {
        return new Sable(this.arma.nombre, this.arma.material);
    }

    Armadura(): IArmadura {
        return new Yorio(this.armadura.nombre, this.armadura.material);
    }*/
    Arma(nombre, material) {
        return new Sable_1.Sable(nombre, material);
    }
    Armadura(nombre, material) {
        return new Yorio_1.Yorio(nombre, material);
    }
}
exports.Samurai = Samurai;
