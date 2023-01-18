import { Chapter } from "../models/Chapter.model.js"

const controller = {
    create: async (req, res) => {
        try {
            await Chapter.create(req.body)
            res.status(201).json({
                success: true,
                response: req.body,
            })
        } catch (error) {
            next(error)
        }
    },
    get_pages: async (req, res, next) => {
        const { _id } = req.params
        try {
            const comic = await Chapter.findById(_id)
            console.log(comic)
            res.status(200).json({
                success: true,
                response: comic,
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                response: "Error Obtaining Chapter",
            })
        }
    },
    get_comic_chapters: async (req, res, next) => {
        let consultas = {}
        let ordenamiento = { order: 1 }
        let paginacion = {
            page: 1,
            limit: 5,
        }
        if (req.query.comic_id) {
            consultas.comic_id = req.query.comic_id
        }
        if (req.query.page) {
            paginacion.page = req.query.page
        }
        if (req.query.limit) {
            paginacion.limit = req.query.limit
        }
        if (req.query.sort) {
            ordenamiento = { order: req.query.sort }
        }
        try {
            const chapters = await Chapter.find(consultas)
                .sort(ordenamiento)
                .skip(
                    paginacion.page > 0
                        ? (paginacion.page - 1) * paginacion.limit
                        : 0
                )
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
