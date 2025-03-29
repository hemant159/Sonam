import express from "express"
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})


const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT;

const app = express();
app.use(express.json());

connectDB(mongoURI)

app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})