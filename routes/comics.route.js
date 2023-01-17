import activeAuthor from "../middlewares/activeAuthor.js"
import activeCompany from "../middlewares/activeCompany.js"
import comicTitleExists from "../middlewares/comicTitleExists.js"
import controller from "../controllers/comics.controllers.js"
import { createSchema } from "../schemas/comics.schema.js"
import express from "express"
import passport from "passport"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_comics } = controller

router.post("/", comicTitleExists, validator(createSchema), create)

router.get("/",passport.authenticate('jwt', { session: false }), get_comics)

export default router
