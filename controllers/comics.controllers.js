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
