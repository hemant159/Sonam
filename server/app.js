import express from "express"
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
})

console.log(process.env.MONGO_URI)

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;
console.log(port);

const app = express();
app.use(express.json());

connectDB("mongodb+srv://h2incco:H2incco@dtcms.2cynq.mongodb.net/")

app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})