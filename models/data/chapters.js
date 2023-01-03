import "dotenv/config.js"
import "../../config/database.js"

import { Chapter } from "../Chapter.model.js"

let chapters = [
    {
        comic_id: "63b33ec6314eea2b2abb8e8a",
        title: "Nuevo chapter",
        pages: ["1", "2"],
        order: 10
    },
    {
        comic_id: "63b33ec6314eea2b2abb8e8a",
        title: "Nuevo chapter 2",
        pages: ["1", "2", "3"],
    },
    {
        comic_id: "63b33ec6314eea2b2abb8e8a",
        title: "Nuevo chapter 3",
        pages: ["1"],
        order: 2
    },
]

Chapter.insertMany(chapters)
    .then((chapters) => {
        console.log("chapter created", chapters)
    })
    .catch((error) => {
        console.log(error)
    })
