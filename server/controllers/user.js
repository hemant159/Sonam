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

const login = (req, res) => {
    res.send("hello sonam");
}

export {
    login,
    newUser
}