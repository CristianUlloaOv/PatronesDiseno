export interface BuilderCasaInterface {
  reiniciar(): void;
  construirEstructura(estructura: string): void;
  construirPisos(pisos: number): void;
  construirPiscina(piscina: boolean): void;
  construirGarage(garage: boolean): void;
  construirJardin(jardin: boolean): void;
}
