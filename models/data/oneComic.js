import 'dotenv/config.js'
import '../../config/database.js'

import { Author } from '../Author.model.js'
import { Category } from '../Category.model.js'
import { Chapter } from '../Chapter.model.js'
import { Comic } from '../Comic.model.js'
import { chapters } from './chapters.js'

let comic = {
    title: "Ajin",
    photo: "https://storage.googleapis.com/minga/mangas/parasyte/main__parasyte.jpg",
    description: "Ajin es una serie de manga escrita e ilustrada por Gamon Sakurai. Fue serializada en la revista Young Jump de Shueisha desde el 25 de noviembre de 2012 hasta el 25 de noviembre de 2015, y recopilada en 10 volúmenes tankōbon. La historia sigue a Kei Nagai, un estudiante de secundaria que muere en un accidente de tráfico. Sin embargo, Kei es resucitado por un científico llamado Dr. Yuuko, que le dice que es un Ajin, un ser humano que ha sido clonado de una forma de vida extraterrestre. La serie ha sido adaptada en una serie de televisión de anime de 13 episodios producida por Polygon Pictures y dirigida por Naoto Hosoda."
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