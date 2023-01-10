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
    let consultas = {}
    if (req.query.comic_id) {
      consultas.comic_id = req.query.comic_id 
    }
    if (req.query.order) {
      consultas.order = req.query.order
    }
    try {
      const comic = await Chapter.find(consultas)
      console.log(comic)
      res.status(200).json({
        success: true,
        response: comic
      })
    }catch (error) {
      next(error)
    }
/*     try {
      const {id, order} = req.params 
      const comic = await Chapter.find({comic_id: id, order: order})
      console.log(comic)
      res.status(200).json({
        success: true,
        response: comic})
    } catch (error) {
        next(error)
    } */
},
}

export default controller
