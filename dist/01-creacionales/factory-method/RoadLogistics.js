"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoadLogistics = void 0;
const Logistics_1 = require("./Logistics");
const Truck_1 = require("./Truck");
class RoadLogistics extends Logistics_1.Logistics {
    createTransport() {
        return new Truck_1.Truck();
    }
}
exports.RoadLogistics = RoadLogistics;
