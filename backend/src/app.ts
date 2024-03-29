import express from "express";
import transactionRouter from "./routes/transactionRouter";
import * as dotenv from 'dotenv';

const cors = require("cors");

dotenv.config();

const port = process.env.PORT || 9999;
const app = express();

app.use(cors());
app.use(express.json());
app.use(transactionRouter);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})