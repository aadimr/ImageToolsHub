import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { notFound, errorHandler } from "./middlewares/error";
import route from "./routes/route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (optional)
// app.use("/uploads", express.static("uploads"));

app.use("/", route);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

(async () => {
    try {
        await connectDB(process.env.MONGO_URL as string);
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("❌ Failed to start:", err);
        process.exit(1);
    }
})();