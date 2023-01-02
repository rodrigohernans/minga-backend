import { Comment } from "../models/comment.model.js"

const controller = {
  // CRUD
  create: async (req, res) => {
    try {
      await Comment.create(req.body)
      res.status(201).json({
        success: true,
        response: req.body,
      })
    } catch (error) {
      res.status(404).json({
        success: false,
        response: "Error al crear el comentario",
      })
      console.log(error)
    }
  }, // Create a new comment (POST)
}

export default controller