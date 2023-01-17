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
    }
}

export default controller
