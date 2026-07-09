"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics = void 0;
class Logistics {
    planDelivery() {
        const transport = this.createTransport();
        transport.deliver();
    }
}
exports.Logistics = Logistics;
