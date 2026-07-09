"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainFactory = mainFactory;
const RoadLogistics_1 = require("./RoadLogistics");
const SeaLogistics_1 = require("./SeaLogistics");
function mainFactory() {
    let logistic = new RoadLogistics_1.RoadLogistics();
    logistic.planDelivery();
    let logisticSea = new SeaLogistics_1.SeaLogistics();
    logisticSea.planDelivery();
}
