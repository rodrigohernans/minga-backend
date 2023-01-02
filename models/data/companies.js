import "dotenv/config.js"
import "../../config/database.js"

import { Company } from "../Company.model.js"

let companies = [
    {
        name: "Juan Carlos Api",
        logo: "http://google.com/",
        website: "http://google.com/",
        description: "klajsdklajksld",
        user_id: "63b1cb4db1f1ec1540d8078f",
        active: true,
    },
    {
        name: "Ezequiel Dom",
        logo: "http://yahoo.com/",
        website: "http://yahoo.com/",
        description: "adsasd",
        user_id: "63b1cb4db1f1ec1540d8078f",
        active: true,
    },
    {
        name: "Anthony Zuckerberg",
        logo: "http://facebook.com/",
        website: "http://facebook.com/",
        description: "iyuiyuiyiui",
        user_id: "63b1cb4db1f1ec1540d8078f",
        active: true,
    },
]

Company.insertMany(companies)
  .then((categories) => {
    console.log("categories created", categories)
  })
  .catch((error) => {
    console.log(error)
  })
