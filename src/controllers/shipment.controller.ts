import { Request, Response } from "express";
import shipmentService from "../services/shipments.services";

class ShipmentController {
    async create(req: Request, res: Response) {
        const shipment = req.body;
        try {
            const result = await shipmentService.createShipment(shipment);
            return res.json({
                data: [{
                    ...result
                }]
            })
        } catch (err) {
            console.log(err);
        }
    }

    async getOne(req: Request, res: Response) {
        const { ref } = req.body;
        try {
            const result = await shipmentService.getAShipment(ref);
            return res.json({
                data: {
                    ref: ref,
                    ...result
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    async deleteOne(req: Request, res: Response) {
        const { ref } = req.body;
        try {
            const result = await shipmentService.deleteAShipment(ref);
            return res.json({
                data: {
                    ...result
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
}
const shipmentController = new ShipmentController();
export default shipmentController;