import mongoose, { Schema, Types } from "mongoose";

const schema = new Schema({
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "accepted", "rejected"],
    },
    sender: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    }, 
    receiver: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
},
{
    timestamps: true
}
)

export const Request = mongoose.model.Request || mangoose.model('Request', schema);