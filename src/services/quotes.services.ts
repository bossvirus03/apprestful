import Quote, { IQuote } from "../models/quote.model";
import databaseService from "./database.services";

class QuoteService {
    async getQuote(payload: IQuote) {
        const result = await databaseService.quotes.insertOne(
            new Quote(payload)
        )
        return {
            id: result.insertedId,
            amount: payload.package.grossWeight.amount
        };
    }
}

const quoteService = new QuoteService();
export default quoteService;