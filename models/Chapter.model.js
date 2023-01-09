import mongoose from "mongoose"

const chapterSchema = new mongoose.Schema(
    {
        comic_id: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        pages: {
            type: Array,
            required: true,
        },
        order: {
            type: Number,
            required: false,
        },
    },
    { timestamps: true }
)

export const Chapter = mongoose.model("chapters", chapterSchema)
