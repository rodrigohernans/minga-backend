import comicTitleExists from "../middlewares/comicTitleExists.js"
import controller from "../controllers/chapter.controller.js"
import { createSchema } from "../schemas/chapter.schema.js"
import express from "express"
import orderExists from "../middlewares/orderExists.js"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_comic_chapters } = controller

router.post("/", validator(createSchema), orderExists, comicTitleExists, create)

router.get("/", get_comic_chapters)

export default router
