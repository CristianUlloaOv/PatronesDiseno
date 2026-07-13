import { IArmadura } from "./IArmadura.interface";

export class Yorio implements IArmadura{
    nombre: string;
    material: string;
    
    constructor(nombre: string, material:string){
        this.nombre = nombre;
        this.material = material;
    }
    
    defensa(): void {
        console.log(`Defensa armadura Yoroi con nombre ${this.nombre} y material ${this.material}`);
    }
    
}