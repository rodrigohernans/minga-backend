import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    mail: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    is_online: {
      type: Boolean,
      required: true
    },
    is_admin: {
      type: Boolean,
      required: true
    },
    is_author: {
      type: Boolean,
      required: true
    },
    is_company: {
      type: Boolean,
      required: true
    },
    is_verified: {
      type: Boolean,
      required: true
    },
    verify_code: {
      type: String,
      required: true
    },
  }, { timestamps: true }
)

export const User = mongoose.model("users", userSchema)