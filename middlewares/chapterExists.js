import { Chapter } from "../models/Chapter.model.js"
import defaultResponse from '../config/response.js'


async function chapterExists(req, res, next) {
    const chapter = await Chapter.findOne({order: req.body.order})
    if(!chapter){
        req.chapter = {
            comic_id: chapter?.comic_id,
            title: chapter?.title,
            order: chapter?.order,
            pages: chapter?.pages
        }
        return next()
    }
    req.success = false
    req.body.sc = 400
    req.body.data = 'Chapter exist!'
    return defaultResponse(req, res)

}

export default chapterExists