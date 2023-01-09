import { Author } from "../models/Author.model.js"
import defaultResponse from "../config/response.js"

async function activeAuthor(req, res, next) {
    const author = await Author.findOne({ user_id: req.body.user_id })
    if (author) {
        if (author.active) {
            return next()
        }
        req.body.success = false
        req.body.sc = 400
        req.body.data = [
            { message: "You must be an active author to be able to post" },
        ]
        return defaultResponse(req, res)
    }
    req.body.success = false
    req.body.sc = 404
    req.body.data = [{ message: "The author was not found, " }]
    return defaultResponse(req, res)
}

export default activeAuthor
