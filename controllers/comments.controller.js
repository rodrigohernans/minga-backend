import { Comment } from "../models/Comment.model.js"

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
            next(error)
        }
    }, // Create a new comment (POST)
}

export default controller
