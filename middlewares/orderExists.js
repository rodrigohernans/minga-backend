import { Chapter } from "../models/Chapter.model.js"
import defaultResponse from "../config/response.js"

async function orderExists(req, res, next) {

    let { order, comic_id } = req.body

    if (!order) {
        let chapter = await Chapter.find({comic_id: comic_id}).sort({ order: "-1" }).limit(1)
        let nextOrder = chapter[0]?.order + 1
        req.body.order = nextOrder
        return next()
    }else{
        let foundChapter = await Chapter.findOne({ comic_id: comic_id, order: order })
        if (foundChapter) {
            req.body.success = false
            req.body.sc = 400
            req.body.data = [{ message: "Order already exists" }]
            return defaultResponse(req, res)
        }
    }
    return next()
}

export default orderExists
