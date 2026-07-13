"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainAbstractFactory = mainAbstractFactory;
const Mago_1 = require("./Mago");
const Samurai_1 = require("./Samurai");
const TiendaHerreria_1 = require("./TiendaHerreria");
function mainAbstractFactory() {
    //let arma: IArma = new Sable('damasco', 'damasco');
    //let armadura: IArmadura = new Yorio('damasco', 'damasco');
    //let samurai: IHerreria = new Samurai(arma, armadura);
    let herreria = new Samurai_1.Samurai();
    //let arma = herreria.Arma('Arma1', 'Damasco');
    //let armadura = herreria.Armadura('Armadura1', 'cuero');
    //arma.atacar();
    //armadura.defensa();
    let tienda = new TiendaHerreria_1.TiendaHerreria(herreria);
    tienda.mostrarGuerrero('Arma1', 'Damasco', 'Armadura1', 'cuero');
    let herreriaMago = new Mago_1.Mago();
    let tiendaMago = new TiendaHerreria_1.TiendaHerreria(herreriaMago);
    tiendaMago.mostrarGuerrero('Daga Legendaria', 'roble Blanco', 'Capa magica', 'tela');
}
