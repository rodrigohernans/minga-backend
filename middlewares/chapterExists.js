import { Chapter } from '../models/Chapter.model.js'
import defaultResponse from '../config/response.js'

async function orderExists(req, res, next) {
    let { order } = req.body
    if (!order) {
        let chapter = await Chapter.find() .sort({ order: '-1' }).limit(1)      
        let nextOrder = chapter[0].order + 1 
        req.body.order = nextOrder
        return next()
    }
    let foundChapter = await Chapter.findOne({ order })
    if (foundChapter) {
        req.body.success = false
        req.body.sc = 400
        req.body.data = [{message: 'order exists'}]
        return defaultResponse(req, res)
    }
    return next()
}

export default orderExists