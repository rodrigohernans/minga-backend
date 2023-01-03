import 'dotenv/config.js'
import '../../config/database.js'

import { Comic } from '../Comic.models.js'

let comics = [
    {

        author_id: "63b31c350bddc55d435910d7",
        company_id: "63b31c350bddc55d435910d7" ,
        title: "priemertitulo",
        photo: "foto.png",
        description: "primerdescription" ,
        category: "63b31c350bddc55d435910d7",
    },
    {

        author_id: "63b31c350bddc55d435910d7",
        company_id: "63b31c350bddc55d435910d7" ,
        title: "priemertitulo",
        photo: "foto.png",
        description: "primerdescription" ,
        category: "63b31c350bddc55d435910d7",
    },

]

Comic.insertMany(comics)
    .then((comics) => {
        console.log('comic creados', comics)
    }).catch(err => console.log(err)) 