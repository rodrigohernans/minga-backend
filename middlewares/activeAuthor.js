import { Author } from "../models/Author.model.js";

async function activeAuthor(req, res, next) {
    const author = await Author.findOne({ active: req.body.active })
    if (author) {
        return next();
    } else {
        res.status(400).json({
            success: false,
            response: "You must be an active author to be able to post"
        })
    }
}

export default activeAuthor;