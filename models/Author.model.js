import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: {type: String, require: true},
    last_name: {type: String},
    city: {type: String, require: true},
    country: {type: String, require: true},
    date: {type: Date},
    photo: {type: String, require: true},
    user_id: {type: mongoose.Types.ObjectId, ref: 'users', require: true},
    active: {type: Boolean, require: true}
}, {timestamps: true})

export const Author = mongoose.model('authors', authorSchema) 