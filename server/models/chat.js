import mongoose, { Schema, Types } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    groupChat: {
        type: Boolean,
        default: false
    }, 
    creator: {
        type: Types.ObjectId,
        ref: "User",
    },
    members: [
        {
            type: Types.ObjectId,
            ref: "User"
        }
    ]
},
{
    timestamps: true
}
)

export const Chat = mongoose.model.Request || mangoose.model('Chat', schema);