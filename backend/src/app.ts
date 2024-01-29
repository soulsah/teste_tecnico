import express from "express";
import transactionRouter from "./routes/transactionRouter";
import * as dotenv from 'dotenv';

const cors = require("cors");

dotenv.config();

const port = process.env.PORT || 9999;
const app = express();

app.use(express.json());
app.use(transactionRouter);
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})