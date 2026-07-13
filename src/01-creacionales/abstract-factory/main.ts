import { IArma } from "./IArma.interface";
import { IArmadura } from "./IArmadura.interface";
import { IHerreria } from "./IHerreriaFabrica.interface";
import { Mago } from "./Mago";
import { Sable } from "./Sable";
import { Samurai } from "./Samurai";
import { TiendaHerreria } from "./TiendaHerreria";
import { Yorio } from "./Yorio";

export function mainAbstractFactory(){
    //let arma: IArma = new Sable('damasco', 'damasco');
    //let armadura: IArmadura = new Yorio('damasco', 'damasco');

    //let samurai: IHerreria = new Samurai(arma, armadura);

    let herreria: IHerreria = new Samurai();
    //let arma = herreria.Arma('Arma1', 'Damasco');
    //let armadura = herreria.Armadura('Armadura1', 'cuero');

    //arma.atacar();
    //armadura.defensa();

    
    let tienda: TiendaHerreria = new TiendaHerreria(herreria);
    tienda.mostrarGuerrero('Arma1', 'Damasco','Armadura1', 'cuero');

    let herreriaMago: IHerreria = new Mago();
    let tiendaMago: TiendaHerreria = new TiendaHerreria(herreriaMago);
    tiendaMago.mostrarGuerrero('Daga Legendaria', 'roble Blanco', 'Capa magica', 'tela');


}