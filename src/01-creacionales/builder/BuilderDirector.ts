import { Builder } from "./Builder";
import { Casa } from "./Casa";

class BuilderDirector{
    private builderCasa?: Builder;

    constructor(builderCasa: Builder){
        this.builderCasa = builderCasa;
    }

    private changeBuilder(builderCasa: Builder): void{
        this.builderCasa = builderCasa;
    }

    public tipoCasa1(){
        this.builderCasa?.reiniciar();
        this.builderCasa?.construirEstructura("Material");
        this.builderCasa?.construirPisos(2);
        this.builderCasa?.construirPiscina(true);
        this.builderCasa?.construirGarage(true);
        this.builderCasa?.construirPiscina(true);
    }

    public tipoCasa2(){
        this.builderCasa?.reiniciar();
        this.builderCasa?.construirEstructura("Madera");
        this.builderCasa?.construirPisos(1);
        this.builderCasa?.construirPiscina(false);
        this.builderCasa?.construirGarage(false);
        this.builderCasa?.construirPiscina(false);
    }
}

export function main() {

    const builder = new Builder();
    const director = new BuilderDirector(builder);

    director.tipoCasa1();
    const casa1 = builder.obtenerCasa();
    casa1?.mostrarCasa();

    director.tipoCasa2();
    const casa2 = builder.obtenerCasa();
    casa2?.mostrarCasa();


  
 
}