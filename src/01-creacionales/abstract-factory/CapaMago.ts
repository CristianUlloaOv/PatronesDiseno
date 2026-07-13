import { IArmadura } from "./IArmadura.interface";

export class CapaMago implements IArmadura{
    nombre: string;
    material: string;
    
    constructor(nombre: string, material:string){
        this.nombre = nombre;
        this.material = material;
    }
    
    defensa(): void {
        console.log(`Defensa armadura Capa Mago con nombre ${this.nombre} y material ${this.material}`);
    }
    
}