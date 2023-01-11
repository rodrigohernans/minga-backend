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
    get_comics_from_cia: async (req, res, netx) => {
        let filterByProfile = {}
        let orderByDate = {}
        let pagination = {
            page: 1
        }
        if(req.query.company_id){
            filterByProfile.company_id = req.query.company_id
        }
        if(req.query.category_id){
            filterByProfile.category_id = req.query.category_id
        }
        if(orderByDate){
            orderByDate = {createdAt: "1"}
        }
        if (req.query.page) {
            pagination.page = req.query.page
        }
        try {
            let comics = await Comic.find(filterByProfile, "-_id -author_id -company_id -category_id -createdAt -updatedAt -__v")
            .sort(orderByDate)
            .skip( pagination.page > 0 ? ((pagination.page - 1) * 5 ) : 0)
            .limit(5)
            res.status(200).json({
                success: true,
                response: comics,
            })
        } catch(error) {
            netx(error)
        }
    }
}

export default controller
