import { Comment } from "../models/Comment.model.js"
import defaultResponse from "../../minga-backend/config/response.js"

async function isSameUser(req, res, next) {
    let { id } = req.user
    let { comment_id } = req.params
    let comment = await Comment.findById(comment_id)
    console.log(comment_id)
    if (comment === null) {
        req.body.success = false
        req.body.sc = 400
        req.body.data = `Failure to retrieve comment with id: ${comment_id}`
        return defaultResponse(req, res)
    }
    if (id.equals(comment.user_id)) {
        return next()
    }
    req.body.success = false
    req.body.sc = 401
    req.body.data = "You are not allowed to modify this comment"
    return defaultResponse(req, res)
}

export default isSameUser