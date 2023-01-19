import mongoose from "mongoose"

const reactionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        comic_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "comics",
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "users",
        },
    },
    { timestamps: true }
)

export const Reaction = mongoose.model("reactions", reactionSchema)
