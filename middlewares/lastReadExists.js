import { LastRead } from "../models/LastRead.model.js"
import defaultResponse from "../config/response.js"

async function lastReadExists(req, res, next) {
    const last_read = await LastRead.findOne({ user_id: req.body.user_id, comic_id: req.body.comic_id, chapter_id: req.body.chapter_id })
    if (last_read) {
        req.body.success = false
        req.body.sc = 400
        req.body.data = [{ message: "Last Read already exists." }]
        return defaultResponse(req, res)
    }
    return next()
}

export default lastReadExists