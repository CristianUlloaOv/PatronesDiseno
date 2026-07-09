import { Transport } from "./Transport.interface";

export class Ship implements Transport {
    deliver(): void {
        console.log("Send deliver on Ship")
    }  
}  