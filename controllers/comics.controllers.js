import { Author } from "../models/Author.model.js"
import { Category } from "../models/Category.model.js"
import { Comic } from "../models/Comic.model.js"

const controller = {
    create: async (req, res, next) => {
        try {
            await Comic.create(req.body)
            res.status(201).json({
                success: true,
                response: req.body,
            })
        } catch (error) {
            next(error)
        }
    },
    get_comics: async (req, res, next) => {
        let consultas = {}
        let ordenamiento = {
            title: 1,
        }
        let paginacion = {
            page: 1,
            limit: 10,
        }
        if (req.query.title) {
            consultas.title = { $regex: req.query.title.trim(), $options: "i" }
        }
        if (req.query.category_id) {
            consultas.category_id = req.query.category_id
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
            const comics = await Comic.find(
                consultas,
                "-__v -author_id -company_id"
            )
                .sort(ordenamiento)
                .skip((paginacion.page - 1) * paginacion.limit)
                .limit(paginacion.limit)
            if (comics.length === 0) {
                res.status(404).json({
                    success: false,
                    response: comics,
                    message: "No comics found matching the filters",
                })
            } else {
                res.status(200).json({
                    success: true,
                    response: comics,
                })
            }
        } catch (error) {
            next(error)
        }
    },
    get_comic: async (req, res, next) => {
        try {
            const { id } = req.params
            let comic = await Comic.findById(id, "-company_id -category")
                .populate({ path: "author_id", select: "name -_id" })
                .populate({ path: "category_id", select: "name -_id" })
            if (comic) {
                res.status(200).json({
                    success: true,
                    response: comic,
                })
            } else {
                res.status(400).json({
                    success: false,
                    response: "comic not found",
                })
            }
        } catch (error) {
            next(error)
        }
    },
    get_comics_from_cia: async (req, res, next) => {
        let filterByProfile = {}
        let orderByDate = {}
        let pagination = {
            limit: 5
        }
        if (req.query.company_id) {
            filterByProfile.company_id = req.query.company_id
        }
        if (req.query.category_id) {
            filterByProfile.category_id = req.query.category_id
        }
        if (req.query.limit) {
            pagination.limit = req.query.limit
        }
        if (orderByDate) {
            orderByDate = { createdAt: "1" }
        }
        try {
            let comics = await Comic.find(filterByProfile, "-author_id -company_id -createdAt -updatedAt -__v")
                .sort(orderByDate)
                // .skip( pagination.limit > 0 ? ((pagination.limit - 1) * 5 ) : 0)
                .limit(pagination.limit)
            if (comics.length === 0) {
                res.status(404).json({
                    success: false,
                    message: "Comics not found"
                })
            } else {
                res.status(200).json({
                    success: true,
                    response: comics,
                    message: "Comics found"
                })
            }
        } catch (error) {
            next(error)
        }
    },
    get_comics_from_author: async (req, res, next) => {
        try {
            const query = {}
    
            const order = {
                    createdAt: 'desc'
                }
    
            let comicsLength = 0;
    
            if (req.query.author_id) {
                query.author_id = req.query.author_id
                const comicsPerAuthor = await Comic.countDocuments({ author_id: req.query.author_id });
                comicsLength = comicsPerAuthor
                console.log(comicsLength)
            }
    
            if (req.query.new === 'false') {
                order.createdAt = 'asc'
            }
    
            const comics = await Comic.find(query)
                    .sort(order)
                    .limit(comicsLength < 4 ? 0 : Math.round(comicsLength / 2))
            res.status(201).json({
                success: true,
                response: comics,
            })
        } catch (error) {
            next(error)
        }
    }
}

export default controller
