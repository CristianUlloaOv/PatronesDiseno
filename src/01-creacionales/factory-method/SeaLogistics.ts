import { Logistics } from "./Logistics";
import { Ship } from "./Ship";
import { Transport } from "./Transport.interface";

export class SeaLogistics extends Logistics{
    override createTransport(): Transport {
        return new Ship();
    }
}