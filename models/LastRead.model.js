import mongoose from "mongoose"

const lastReadSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "users"
        },
        comic_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "comics"
        },
        chapter_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "chapters"
        },
        page: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
)

export const LastRead = mongoose.model("last_reads", lastReadSchema)