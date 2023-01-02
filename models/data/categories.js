import "dotenv/config.js"
import "../../config/database.js"

import { Category } from "../Category.model.js"

let categories = [
  {
    name: "shonen",
    details:
      "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists.",
  },
  {
    name: "manhwa",
    details:
      "The Manhwa is from South Korea and is read in the same direction as western books (horizontally and from left to right).",
  },
  {
    name: "marvel",
    details: "American superhero comics",
  },
  {
    name: "dc",
    details: "American superhero comics",
  },
  {
    name: "shojo",
    details:
      "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
  },
  {
    name: "seinen",
    details: "Japanese seinen tells stories with a mature tone.",
  },
]

Category.insertMany(categories)
  .then((categories) => {
    console.log("categories created", categories)
  })
  .catch((error) => {
    console.log(error)
  })
