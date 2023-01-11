import { Comic } from "../models/Comic.models.js"

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
    get_comics_from_author: async (req, res, next) => {
        let filterProfile = {}
        let orderByDate = {}
        
        if(req.query.author_id){
            filterProfile.author_id = req.query.author_id
        }
    
        if(orderByDate){
            orderByDate = {createdAt: "1"}
        }
        
        try {
            let comics = await Comic.find(filterProfile)
            .sort(orderByDate)
            .limit(4)
            res.status(200).json({
                success: true,
                response: comics,
            })
        } catch(error) {
            next(error)
        }
    }
}

export default controller
