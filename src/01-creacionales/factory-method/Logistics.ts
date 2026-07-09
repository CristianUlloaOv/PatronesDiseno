import { Transport } from "./Transport.interface";

export abstract class Logistics {
    
    protected abstract createTransport(): Transport;

    planDelivery(): void {
        const transport = this.createTransport();
        transport.deliver();
    }
}

