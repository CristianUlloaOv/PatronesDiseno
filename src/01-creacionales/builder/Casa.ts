export class Casa{
    private tipoEstructura?: string;
    private pisos?: number;
    private piscina?: boolean;
    private garage?: boolean;
    private jardin?: boolean;
    private extras?: Array<string>;

    //Se declaran los métodos Setters para que builder pueda establecer la casa paso a paso
    public setTipoEstructura(tipoEstructura: string): void{
        this.tipoEstructura = tipoEstructura;
    }

    public setPisos(pisos: number): void{
        this.pisos = pisos;
    }

    public setPiscina(piscina: boolean): void{
        this.piscina = piscina;
    }

    public setGarage(garage: boolean): void{
        this.garage = garage;
    }

    public setJardin(jardin: boolean): void{
        this.jardin = jardin;
    }

    mostrarCasa(){
        console.log(`Mostrar contrucción de la casa
            Tipo Estructura: ${ this.tipoEstructura } 
            Pisos: ${ this.pisos }
            Piscina: ${ this.piscina }
            Garage: ${ this.garage }
            Jardin: ${ this.jardin }
        `);
    }



}