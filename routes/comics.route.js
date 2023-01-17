/* import activeAuthor from "../middlewares/activeAuthor.js"
import activeCompany from "../middlewares/activeCompany.js" */

import comicTitleExist from "../middlewares/comicTitleExist.js"
import controller from "../controllers/comics.controllers.js"
import { createSchema } from "../schemas/comics.schema.js"
import express from "express"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_comic} = controller
router.post("/" ,comicTitleExist, validator(createSchema),create)
router.get('/:id', get_comic ) 
export default router

