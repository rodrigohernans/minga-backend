import "dotenv/config.js"
import "../../config/database.js"

import { Comment } from "../Comment.model.js"

let comments = [
  {
    chapter_id: "5f9f1b0b0b1b0b0b0b0b0b0b",
    user_id: "5f9f1b0b0b1b0b0b0b0b0b0b",
    text: "This is a comment",
    commentable_id: "5f9f1b0b0b1b0b0b0b0b0b0b",
  },
  {
    chapter_id: "5f9f1b0b0b1b0b0b0b0b0b0b",
    user_id: "5f9f1b0b0b1b0b0b0b0b0b0b",
    text: "This is a comment",
    commentable_id: "5f9f1b0b0b1b0b0b0b0b0b0b",
  }
]

Comment.insertMany(comments)
  .then((comments) => {
    console.log("comments created", comments)
  })
  .catch((error) => {
    console.log(error)
  })
