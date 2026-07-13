import { IArma } from "./IArma.interface";

export class Daga implements IArma{
    nombre: string;
    material: string;
    
    constructor(nombre:string, material:string){
        this.nombre=nombre;
        this.material=material;
    }
    
    atacar(): void {
        console.log(`Ataca con Daga con nombre ${this.nombre} y material ${this.material}`);
    }
    
}