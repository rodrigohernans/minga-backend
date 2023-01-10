import "dotenv/config.js"
import "../../config/database.js"

import { Chapter } from "../Chapter.model.js"
import { Comic } from "../Comic.model.js"
import { chapters } from "./chapters.js"

let findComicId = async (comic_title) => {
    let comic = await Comic.findOne({ title: comic_title })
    return comic._id
}

let newChapters = async (chapters) => {
    let idComic = await findComicId(chapters[0].comic_title)
    chapters.map(chapter => chapter.comic_id = idComic)
    await Chapter.insertMany(chapters)
}

newChapters(chapters)
