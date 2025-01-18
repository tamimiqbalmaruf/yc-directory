import mongoose, { Schema } from "mongoose";

const startupSchema = new Schema({
    title: {
        required: true,
        type: String,
    },
    slug: {
        required: true,
        type: String,
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    },
    views: {
        required: true,
        type: Number,
    },
    description: {
        required: true,
        type: String,
    },
    category: {
        required: true,
        type: String,
    },
    image: {
        required: true,
        type: String,
    },
    pitch: {
        required: true,
        type: String,
    }
});

export const Startup = mongoose.models?.Startup ?? mongoose.model("Startup", startupSchema);