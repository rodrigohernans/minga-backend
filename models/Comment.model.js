import mongoose from "mongoose"

const commentSchema = new mongoose.Schema(
    {
        chapter_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "chapters",
            required: true,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        commentable_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comments",
            required: false,
        },
    },
    { timestamps: true }
)

export const Comment = mongoose.model("comments", commentSchema)
