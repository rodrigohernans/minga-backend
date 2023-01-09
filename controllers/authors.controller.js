import {Author} from "../models/Author.model.js";

const authorController = {
    // CRUD
    create: async (req, res) => {
      try {
        const author = await Author.create(req.body)
        res.status(201).json({
          success: true,
          response: author,
        })
      } catch (error) {
        next(error)
      }
    }, // Create a new author (POST)
}

export default authorController