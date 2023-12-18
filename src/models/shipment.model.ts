import { ObjectId } from "mongodb"
import { IAddress, IContact, IDimensions, IGrossWeight } from "./quote.model";

export interface IShipment {
    quote: {
        id: ObjectId;
    }
    origin: {
        contact: IContact;
        address: IAddress;
    };
    destination: {
        contact: IContact;
        address: IAddress;
    };
    package: {
        dimensions: IDimensions;
        grossWeight: IGrossWeight;
    };
    ref: string;
    created_at: Date;
    cost: number;
}

export default class Shipment {
    ref: IShipment['ref'];
    created_at: IShipment['created_at'];
    cost: IShipment['cost'];
    quote: IShipment['quote'];
    origin: IShipment['origin'];
    destination: IShipment['destination'];
    package: IShipment['package'];

    constructor(shipment: IShipment) {
        this.ref = shipment.ref;
        this.created_at = shipment.created_at;
        this.cost = shipment.cost;
        this.quote = shipment.quote;
        this.origin = shipment.origin;
        this.destination = shipment.destination;
        this.package = shipment.package;
    }
}
