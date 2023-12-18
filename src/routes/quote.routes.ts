import { Router } from "express";
import { QuoteController } from "../controllers/quote.controllers";
import { quoteValidator } from "../middlewares/quotes.middleware";


const quoteRouter = Router();

quoteRouter.post('/', quoteValidator, QuoteController)

export default quoteRouter;