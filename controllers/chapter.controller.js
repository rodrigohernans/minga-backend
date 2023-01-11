import { Chapter } from "../models/Chapter.model.js";

const controller = {
  create: async (req, res) => {
    try {
      await Chapter.create(req.body);
      res.status(201).json({
        success: true,
        response: req.body,
      });
    } catch (error) {
      next(error);
    }
  },
  get_pages: async (req, res, next) => {
    const { _id } = req.params
    try {
      const comic = await Chapter.findById(_id)
      console.log(comic)
      res.status(200).json({
        success: true,
        response: comic
      })
    }catch (error) {
      next(error)
    }
},
}

export default controller
