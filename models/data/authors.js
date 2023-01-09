import "dotenv/config.js"
import "../../config/database.js"

import { Author } from "../Author.model.js"

let authors = [
    {
        name: "pepito",
        last_name: "perez",
        city: "Buenos Aires",
        country: "Argentina",
        date: "2020-12-3",
        photo: "sin foto",
        user_id: "63b31c4cc853e7a4ea643fbc",
        active: true
    }
]

Author.insertMany(authors)
    .then((authors) => {
        console.log("authors created", authors)
    })
    .catch((error) => {
        console.log(error)
    })