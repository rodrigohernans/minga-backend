import { Comic } from "../models/Comic.models.js"
import mongoose from 'mongoose'

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
        let filterId = {
            author_id: req.params.author_id,
            author: req.params.author
        }
        let ordenamiento = {}
        let pagination ={
            limit: 4,
            page: 1
        }
        let newComics = true;

        if(req.query.new){
            if(req.query.new === undefined || req.query.new === 'true'){
            newComics = true;
            }else{
                newComics = false;
            }
        }

        if (!mongoose.Types.ObjectId.isValid(req.params.author_id)) {
            return res.status(400).json({ success: false, response: "Invalid author id format" });
        }

        if (req.query.page) {
            if (isNaN(req.query.page) || req.query.page < 1) {
              return res.status(400).json({ success: false, response: "Invalid page value" });
            }
            pagination.page = parseInt(req.query.page)
          }
          
        if(req.params.author_id){
            filterId.author_id = req.params.author_id
        }

        if(req.query.author_id){
            filterId.author_id = req.query.author_id
        }

        if(newComics){
            pagination.limit = Math.floor(pagination.limit / 2)
            ordenamiento = {createdAt: -1}
        } else {
            ordenamiento = {createdAt: 1}
            let count = await Comic.countDocuments(filterId);
            let middle = Math.floor(count/2);
            pagination.limit = Math.floor(pagination.limit / 2)
            pagination.skip = middle
        }

        if(req.query.sortBy){
            ordenamiento = {createdAt: parseInt(req.query.sortBy) }
        } else {
            ordenamiento = {createdAt: 1}
        }

        try {
            let comics = await Comic.find(filterId, -_id -author_id -company_id -category_id )
            .sort(ordenamiento)
            .skip(pagination.skip)
            .limit(pagination.limit)

            if(comics.length < 4) {
                pagination.limit
             }
            
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
