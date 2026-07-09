import { Transport } from "./Transport.interface";

export class Truck implements Transport {
    deliver(): void {
        console.log("Send deliver on Truck")
    }  
}  