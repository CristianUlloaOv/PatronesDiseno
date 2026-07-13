import { IArma } from "./IArma.interface";
import { IArmadura } from "./IArmadura.interface";

export interface IHerreria{
    Arma(nombre:string, material:string): IArma;
    Armadura(nombre:string, material:string): IArmadura;
}
