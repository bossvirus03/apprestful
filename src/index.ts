import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import databaseService from "./services/database.services";
import quoteRouter from "./routes/quote.routes";
import shipmentRouter from "./routes/shipment.rotes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
databaseService.connect();

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use("/getQuote", quoteRouter)
app.use("/createshipment", shipmentRouter)
app.use("/getshipment", shipmentRouter)
app.use("/deleteshipment", shipmentRouter)



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});