import { Request, Response } from "express";
import quoteService from "../services/quotes.services";


export const QuoteController = async (req: Request, res: Response) => {
    const quotes = req.body;
    try {
        const result = await quoteService.getQuote(quotes)
        return res.json({
            data: [{
                ...result
            }]
        })
    } catch (err) {
        console.log(err);
    }
}