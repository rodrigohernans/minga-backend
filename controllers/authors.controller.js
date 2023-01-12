import { Author } from "../models/Author.model.js"

const authorController = {
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
    },

    get_author: async (req, res, next) => {
        try {
          const { id } = req.params;
          let author = await Author.findById(id).select('-.*_id');
          if (author) {
            res.status(200).json({
              success: true,
              response: author,
            });
          } else {
            res.status(400).json({
              success: false,
              response: "Error obtaining Author",
            });
          }
        } catch (error) {
          next(error);
        }
      },

}

export default authorController
