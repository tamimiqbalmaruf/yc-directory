import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    userName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    image: {
        required: true,
        type: String,
    },
    bio: {
        required: false,
        type: String,
    }
});

export const Author = mongoose.models?.Author ?? mongoose.model("Author", authorSchema);