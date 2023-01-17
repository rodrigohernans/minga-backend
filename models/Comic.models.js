import mongoose from "mongoose"

const comicSchema = new mongoose.Schema(
    {
        author_id: { type: mongoose.Types.ObjectId, required: true },
        company_id: { type: mongoose.Types.ObjectId },
        title: { type: String, required: true },
        photo: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: mongoose.Types.ObjectId, required: true },
    },
    { timestamps: true }
)

export const Comic = mongoose.model("comics", comicSchema)
