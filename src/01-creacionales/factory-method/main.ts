import { Logistics } from "./Logistics";
import { RoadLogistics } from "./RoadLogistics";
import { SeaLogistics } from "./SeaLogistics";

export function mainFactory(){
    let logistic: Logistics = new RoadLogistics();
    logistic.planDelivery();

    let logisticSea: Logistics = new SeaLogistics();
    logisticSea.planDelivery();

}
