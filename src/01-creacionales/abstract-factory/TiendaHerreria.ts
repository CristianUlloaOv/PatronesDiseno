import { IHerreria } from "./IHerreriaFabrica.interface";

export class TiendaHerreria{
    private IHerreria: IHerreria;

    constructor(IHerreria: IHerreria){
        this.IHerreria = IHerreria;
    }

    public mostrarGuerrero(nombreArma:string, materialArma: string, nombreArmadura:string, materialArmadura:string): void{
        const arma = this.IHerreria.Arma(nombreArma, materialArma);
        const armadura = this.IHerreria.Armadura(nombreArmadura, materialArmadura);

        arma.atacar();
        armadura.defensa(); 
    }
}