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
    let ordenamiento = {
        title: 1
    }
    let paginacion = {
        page: 1,
        limit: 10
    }
    if (req.query.title) {
        consultas.title = { $regex: req.query.title.trim(), $options: "i" }
    }
    if (req.query.category) {
        consultas.category = req.query.category
    }
    if (req.query.sort) {
        ordenamiento = req.query.sort
    }
    if (req.query.page) {
        paginacion.page = req.query.page
    }
    if (req.query.limit) {
        paginacion.limit = req.query.limit
    }
    try {
        const chapters = await Chapter.find(consultas)
            .sort(ordenamiento)
            .skip((paginacion.page - 1) * paginacion.limit)
            .limit(paginacion.limit)
        res.status(200).json({
            success: true,
            response: chapters,
        })
    } catch (error) {
        next(error)
    }
},
}

export default controller
