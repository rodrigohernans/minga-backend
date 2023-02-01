import { Chapter } from "../models/Chapter.model.js"

async function chapterTitleExists(req, res, next) {

    const { comic_id, title } = req.body

    const chapter = await Chapter.findOne({ comic_id: comic_id, title: req.body.title })
    if (chapter) {
        return res.status(400).json({
            success: false,
            response: [
                { message: "The chapter title already exists, try another name"},
            ],
        })
    }
    return next()
}

export default chapterTitleExists
