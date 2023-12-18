import { Router } from "express";
import shipmentController from "../controllers/shipment.controller";
const shipmentRouter = Router();

shipmentRouter.post('/', shipmentController.create)
shipmentRouter.get('/', shipmentController.getOne)
shipmentRouter.delete('/', shipmentController.deleteOne)


export default shipmentRouter;