import 'dotenv/config.js'
import '../../config/database.js'

import { Author } from '../Author.js'
import { Category } from '../Category.js'
import { Chapter } from '../Chapter.js'
import { Comic } from '../Comic.js'
import { chapters } from './chapters.js'

let comic = {
    title: "pokemon adventure",
    photo: "https://storage.googleapis.com/minga/mangas/pokemon/main__pokemon.png",
    description: "Our story follows the adventures of Red, who embarks on a journey inspired by an encounter with future rival Blue. Red dreams of becoming a Pokémon Master, someone powerful enough to defeat Blue and become the best."
}


let newComic = async(name_category,comic) => {
    let author = await Author.findOne({name: "igna"})
    comic.author_id = author._id
    let category = await Category.findOne({ name: name_category })
    comic.category_id = category._id
    let newComic = await Comic.create(comic)
    return newComic._id
}

let newChapter = async(comic,chapters) => {
    let idComic = await newComic("shonen",comic)
    chapters.map(chap => chap.comic_id = idComic)
    await Chapter.insertMany(chapters)
}

newChapter(comic,chapters)