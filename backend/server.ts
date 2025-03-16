import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });  // Adjust path if needed

import express, { Application, Request, Response } from "express";
import chalk from "chalk";
import connectDB from "../backend/config/db";


connectDB(); // Connect to MongoDB

const app: Application = express();
app.use(express.json()); // Accept JSON data


app.get("/", (req: Request, res: Response) => {
  res.send("API is running" + req.body);
});


// ENV Setup
const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

app.listen(PORT, () => {
  console.log(
    chalk.yellow(
       `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
    )
  );
});
