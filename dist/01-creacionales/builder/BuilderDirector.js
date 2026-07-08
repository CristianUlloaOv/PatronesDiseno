"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const Builder_1 = require("./Builder");
class BuilderDirector {
    builderCasa;
    constructor(builderCasa) {
        this.builderCasa = builderCasa;
    }
    changeBuilder(builderCasa) {
        this.builderCasa = builderCasa;
    }
    tipoCasa1() {
        this.builderCasa?.reiniciar();
        this.builderCasa?.construirEstructura("Material");
        this.builderCasa?.construirPisos(2);
        this.builderCasa?.construirPiscina(true);
        this.builderCasa?.construirGarage(true);
        this.builderCasa?.construirPiscina(true);
    }
    tipoCasa2() {
        this.builderCasa?.reiniciar();
        this.builderCasa?.construirEstructura("Madera");
        this.builderCasa?.construirPisos(1);
        this.builderCasa?.construirPiscina(false);
        this.builderCasa?.construirGarage(false);
        this.builderCasa?.construirPiscina(false);
    }
}
function main() {
    const builder = new Builder_1.Builder();
    const director = new BuilderDirector(builder);
    director.tipoCasa1();
    const casa1 = builder.obtenerCasa();
    casa1?.mostrarCasa();
    director.tipoCasa2();
    const casa2 = builder.obtenerCasa();
    casa2?.mostrarCasa();
}
