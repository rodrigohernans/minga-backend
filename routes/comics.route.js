import activeAuthor from "../middlewares/activeAuthor.js"
import activeCompany from "../middlewares/activeCompany.js"
import comicTitleExists from "../middlewares/comicTitleExists.js"
import controller from "../controllers/comics.controllers.js"
import { createSchema } from "../schemas/comics.schema.js"
import express from "express"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_comics_from_author} = controller

router.post("/", comicTitleExists, activeAuthor, activeCompany, validator(createSchema), create)

router.get("/profile/author", get_comics_from_author)

export default router
