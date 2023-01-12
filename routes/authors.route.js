import authorcontroller from "../controllers/authors.controller.js"
import activeAuthor from "../middlewares/activeAuthor.js"
import validator from "../middlewares/validator.js"
import schema from "../schemas/authors.schema.js"
import express from "express"

const router = express.Router()
const { create, get_author } = authorcontroller

router.post("/", validator(schema), activeAuthor, create)
router.get("/:id", get_author)

export default router