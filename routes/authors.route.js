import activeAuthor from "../middlewares/activeAuthor.js"
import authorController from "../controllers/authors.controller.js"
import express from "express"
import schema from "../schemas/authors.schema.js"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_author } = authorController

router.post("/", validator(schema), activeAuthor, create)

router.get("/:id", get_author)

export default router
