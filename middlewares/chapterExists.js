import { Chapter } from "../models/Chapter.model.js"
import defaultResponse from '../config/response.js'


async function chapterExists(req, res, next) {
    const chapter = await Chapter.findOne({order: req.body.order})
    const lastChapter = (await Chapter.find())
    if (!chapter) {
        if(chapter === null){
            req.chapter = {
                comic_id: chapter?.comic_id,
                title: chapter?.title,
                pages: chapter?.pages,
            }
            req.body.order = lastChapter[lastChapter.length-1].order+1
        }else{
            req.chapter = {
                comic_id: chapter?.comic_id,
                title: chapter?.title,
                pages: chapter?.pages,
                order: chapter?.order
            }
        }
        return next()
    }
    req.body.success = false
    req.body.sc = 400
    req.body.data = 'chapter exist!'
    return defaultResponse(req,res)
}

export default chapterExists