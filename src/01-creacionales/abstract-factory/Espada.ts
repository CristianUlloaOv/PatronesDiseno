import { IArma } from "./IArma.interface";

export class Espada implements IArma{
    nombre: string;
    material: string;
    
    constructor(nombre:string, material:string){
        this.nombre=nombre;
        this.material=material;
    }
    
    atacar(): void {
        console.log("Ataca con espada ", this.nombre);
    }
    
}