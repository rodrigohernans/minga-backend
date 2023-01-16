import chapterExists from "../middlewares/chapterExists.js"
import comicTitleExist from "../middlewares/comicTitleExist.js"
import controller from "../controllers/chapter.controller.js"
import { createSchema } from "../schemas/chapter.schema.js"
import express from "express"
import validator from "../middlewares/validator.js"

const router = express.Router()

const {create, get_comic_chapters } = controller
/* const {  get_comic_chapters } = chapterDetailControllers */

router.post("/",validator(createSchema),chapterExists,comicTitleExist,create);
router.get("/", get_comic_chapters);

export default router
