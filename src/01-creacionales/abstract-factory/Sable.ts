import { IArma } from "./IArma.interface";

export class Sable implements IArma{
    nombre: string;
    material: string;
    
    constructor(nombre:string, material:string){
        this.nombre=nombre;
        this.material=material;
    }
    
    atacar(): void {
        console.log("Sable con espada con nombre: ", this.nombre);
    }
    
}