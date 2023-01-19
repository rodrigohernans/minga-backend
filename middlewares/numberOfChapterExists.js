import { Chapter } from "../models/Chapter.model";
import defaultResponse from "../config/response";

async function numberOfChapterExists(req, res, next) {
    const {order} = req.body
    let foundChapter = await Chapter.findOne({order}) 
    if(foundChapter) {
        req.body.success = false
        req.body.data = [{message: "Order already exists"}]
        return defaultResponse
    }
    return next()
}

export default numberOfChapterExists 