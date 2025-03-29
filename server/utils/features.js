import mongoose from "mongoose"
import jwt from "jsonwebtoken"

const cookieOptions = {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: "true",
    secure: true
}

const connectDB = (uri) => {
    mongoose
        .connect(uri, {dbName: "Sonam"})
        .then((data) => console.log(`Connected to MongoDB: ${data.connection.host}`))
        .catch((err) => {
            throw err;
        })
}

const sendToken = (res, user, code, message) => {
    const token = jwt.sign({ _id: user._id }, "process.env.JWT_SECRET");
    console.log()

    console.log(token);

    return res.status(code).cookie("cookie-token", token, cookieOptions).json({
        success: true,
        message
    })

} 

export {
    connectDB,
    sendToken
}