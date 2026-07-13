import { IArmadura } from "./IArmadura.interface";

export class MallaDragon implements IArmadura{
    nombre: string;
    material: string;
    
    constructor(nombre: string, material:string){
        this.nombre = nombre;
        this.material = material;
    }
    
    defensa(): void {
        console.log("Defensa armadura Malla Dragon");
    }
    
}