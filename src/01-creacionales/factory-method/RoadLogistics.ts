import { Logistics } from "./Logistics";
import { Transport } from "./Transport.interface";
import { Truck } from "./Truck";

export class RoadLogistics extends Logistics{
    override createTransport(): Transport {
        return new Truck();
    }
    
}