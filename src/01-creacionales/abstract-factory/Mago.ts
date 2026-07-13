import { CapaMago } from "./CapaMago";
import { Daga } from "./Daga";
import { IArma } from "./IArma.interface";
import { IArmadura } from "./IArmadura.interface";
import { IHerreria } from "./IHerreriaFabrica.interface";

export class Mago implements IHerreria{

    Arma(nombre:string, material:string): IArma {
        return new Daga(nombre, material);
    }

    Armadura(nombre:string, material:string): IArmadura {
        return new CapaMago(nombre, material);
    }
    
}