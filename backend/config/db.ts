import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";

// Load environment variables
dotenv.config();

type MongoConnection = typeof mongoose;

const connectDB = async (): Promise<MongoConnection | void> => {
    try {
        const mongoUri = process.env.MONGO_URI;  // Fetch from .env
        if (!mongoUri) {
            throw new Error("MongoDB URI is missing in .env file");
        }

        const conn = await mongoose.connect(mongoUri);
        console.log(chalk.cyan(`MongoDB connected: ${conn.connection.host}`));
    } catch (err) {
        if (err instanceof Error) {
            console.error(chalk.red(`Error: ${err.message}`));
        } else {
            console.error(chalk.red("Unknown error occurred during MongoDB connection"));
        }
        process.exit(1);
    }
};

export default connectDB;






