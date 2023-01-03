import { Chapter } from "../models/Chapter.model.js"
import defaultResponse from '../config/response.js'

async function chapterExists(req, res, next) {
    const chapter = await Chapter.findOne({order: req.body.order})
    const comic = await Chapter.findOne({comic_id: req.body.comic_id})
    if (chapter && comic) {
        let newOrder = chapter?.order+1
        req.chapter = {
            comic_id: chapter?.comic_id,
            title: chapter?.title,
            pages: chapter?.pages,
            order: newOrder,
        }
        console.log(newOrder)
        return next()
    }
    
    req.body.success = false
    req.body.sc = 400
    req.body.data = 'order no exist!'
    return defaultResponse(req,res)

}

export default chapterExists