import { Builder } from "./Builder";
import { BuilderCasaInterface } from "./BuilderCasa.interface";

class BuilderDirector{
    private builderCasa?: BuilderCasaInterface;

    constructor(builderCasa: BuilderCasaInterface){
        this.builderCasa = builderCasa;
    }

    private changeBuilder(builderCasa: BuilderCasaInterface): void{
        this.builderCasa = builderCasa;
    }

    public tipoCasa1(){
        this.builderCasa?.reiniciar();
        this.builderCasa?.construirEstructura("Material");
        this.builderCasa?.construirPisos(2);
        this.builderCasa?.construirPiscina(true);
        this.builderCasa?.construirGarage(true);
        this.builderCasa?.construirJardin(true);
    }

    public tipoCasa2(){
        this.builderCasa?.reiniciar();
        this.builderCasa?.construirEstructura("Madera");
        this.builderCasa?.construirPisos(1);
        this.builderCasa?.construirPiscina(false);
        this.builderCasa?.construirGarage(false);
        this.builderCasa?.construirJardin(false);
    }
}

export function mainBuilder() {

    //Ejemplo con director 
    const builder = new Builder();
    const director = new BuilderDirector(builder);

    director.tipoCasa1();
    const casa1 = builder.obtenerCasa();
    casa1?.mostrarCasa();

    director.tipoCasa2();
    const casa2 = builder.obtenerCasa();
    casa2?.mostrarCasa();

    //Ejemplo sin director y directo con el builder
    builder.reiniciar();
    builder.construirEstructura("Ladrillo");
    builder.construirPisos(5);
    builder.construirGarage(true);
    builder.construirPiscina(true);
    builder.construirJardin(false);
    const casa3 = builder.obtenerCasa();
    casa3?.mostrarCasa();

}