"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaLogistics = void 0;
const Logistics_1 = require("./Logistics");
const Ship_1 = require("./Ship");
class SeaLogistics extends Logistics_1.Logistics {
    createTransport() {
        return new Ship_1.Ship();
    }
}
exports.SeaLogistics = SeaLogistics;
