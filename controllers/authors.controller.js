import {Author} from "../models/Author.model.js";

const authorController = {
    // CRUD
    create: async (req, res) => {
      try {
        await Author.create(req.body)
        res.status(201).json({
          success: true,
          response: req.body,
        })
      } catch (error) {
        res.status(404).json({
          success: false,
          response: "Error al crear el Autor",
        })
        console.log(error)
      }
    }, // Create a new author (POST)
}

export default authorController