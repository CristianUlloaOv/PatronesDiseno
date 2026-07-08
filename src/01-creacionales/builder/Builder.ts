import { BuilderCasaInterface } from "./BuilderCasa.interface";
import { Casa } from "./Casa";


export class Builder implements BuilderCasaInterface{
    private resultado?: Casa;

    //Método clasico en patron builder
    reiniciar(): void {
        this.resultado = new Casa();
    }
    construirEstructura(estructura: string): void {
        this.resultado?.setTipoEstructura(estructura);
    }
    construirPisos(pisos: number): void {
        this.resultado?.setPisos(pisos);
    }
    construirPiscina(piscina: boolean): void {
        this.resultado?.setPiscina(piscina);
    }
    construirGarage(garage: boolean): void {
        this.resultado?.setGarage(garage);
    }
    construirJardin(jardin: boolean): void {
        this.resultado?.setJardin(jardin);
    }
    //Método clasico en patron builder
    public obtenerCasa(): Casa | undefined {
        return this.resultado;
    }
    
}