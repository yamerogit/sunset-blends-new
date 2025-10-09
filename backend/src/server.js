import express from "express";
import coffeesRoutes from "./routes/coffeeRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json())
app.use("/api/coffees", coffeesRoutes);

connectDB().then(() => {
    app.listen(PORT,() => {
        console.log("Server started on PORT:", PORT);
    })
});
