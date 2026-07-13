import { IArma } from "./IArma.interface";
import { IArmadura } from "./IArmadura.interface";
import { IHerreria } from "./IHerreriaFabrica.interface";
import { Sable } from "./Sable";
import { Yorio } from "./Yorio";

export class Samurai implements IHerreria{
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

    Arma(nombre:string, material:string): IArma {
        return new Sable(nombre, material);
    }

    Armadura(nombre:string, material:string): IArmadura {
        return new Yorio(nombre, material);
    }
    
}