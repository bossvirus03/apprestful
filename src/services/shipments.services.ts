import Shipment, { IShipment } from "../models/shipment.model";
import databaseService from "./database.services";
import randomstring from "randomstring";

const createRandomRefShipment = () => {
    return randomstring.generate(10)
}
const handleCost = async (length: number, weight: number) => {
    const result = await databaseService.rate.findOne({})
    if (result) {
        for (let item of result.data) {
            if ((weight * 1000) <= item.weight) {
                return length * item.price;
            }
            if (weight * 1000 >= result.data[result.data.length - 1].weight) {
                return length * item.price;
            }
        }
    }
}

class ShipmentService {
    async createShipment(payload: IShipment) {
        const ref = createRandomRefShipment();
        const cost = await handleCost(payload.package.dimensions.length, payload.package.grossWeight.amount) as number;

        await databaseService.shipments.insertOne(
            new Shipment({
                ...payload,
                ref,
                created_at: new Date,
                cost
            })
        )
        return {
            ref,
            created_at: new Date,
            cost
        };
    }

    async getAShipment(ref: any) {
        const result = await databaseService.shipments.findOne({ ref: ref });
        return {
            origin: result?.origin,
            destination: result?.destination,
            package: result?.package,
        };
    }

    async deleteAShipment(ref: any) {
        await databaseService.shipments.deleteOne({ ref: ref });
        return {
            status: "OK",
            message: "shipment has been deleted"
        };
    }
}

const shipmentService = new ShipmentService();
export default shipmentService;