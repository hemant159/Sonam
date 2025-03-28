import mongoose, { Schema, Types } from "mongoose";

const schema = new Schema({
    attachments: [
        {
            public_id: {

                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        },
    ],
    sender: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    chat: {
        type: Types.ObjectId,
        ref: "Chat",
        required: true
    }
},
{
    timestamps: true
}
)

export const Message = mongoose.model.Message || mangoose.model('Message', schema);