import { Db, Document, MongoClient } from "mongodb";
import dotenv from 'dotenv';
import { Collection } from "mongodb";
import Quote from "../models/quote.model";
import Shipment from "../models/shipment.model";
import Rate from "../models/rate.model";

dotenv.config();

export const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
export const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
export const DATABASE_NAME = process.env.DATABASE_NAME;

const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.n3deqoi.mongodb.net/?retryWrites=true&w=majority`;

class DatabaseService {
    private client: MongoClient;
    private db: Db;
    constructor() {
        this.client = new MongoClient(uri);
        this.db = this.client.db(DATABASE_NAME)
    }
    async connect() {
        try {
            await this.db.command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } catch (err) {
            console.log(err);
        }
    }
    get quotes(): Collection<Quote> {
        return this.db.collection('quotes');
    }
    get shipments(): Collection<Shipment> {
        return this.db.collection('shipments');
    }
    get rate(): Collection<Rate> {
        return this.db.collection('rate');
    }
}
const databaseService = new DatabaseService();
export default databaseService;