import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";

const newUser = async (req, res) => {

    const { name, username, password } = req.body;
    console.log(req.body);

    const avatar = {
        public_id: "qwert",
        url: "https://example.com"
    }

    const user = await User.create({
        name,
        username,
        password,
        avatar
    })

    sendToken(res, user, 201, "User Created successfully");
}

const login = async (req, res) => {
    
    const { username, password } = req.body;

    console.log(req.body);

    const user = await User.findOne({ username }).select("+password");

    if(!user) {
        return res.status(400).json({ message: "could not find the user"});
    }

    const isMatch = await compare(password, user.password);

    if(!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials "});
    }

    sendToken(res, user, 200, `Welcome back, ${user.name}`);

    // res.send("Hello s");
}

export {
    login,
    newUser
}