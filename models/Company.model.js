import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        logo: {
            type: String,
            required: true,
        },
        website: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

export const Company = mongoose.model("companies", companySchema);