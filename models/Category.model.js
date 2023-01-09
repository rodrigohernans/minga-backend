import mongoose from "mongoose"

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export const Category = mongoose.model("categories", categorySchema)
