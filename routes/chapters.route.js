import controller from "../controllers/chapter.controller.js"
import express from "express"
import { createSchema } from "../schemas/chapter.schema.js"
import validator from "../middlewares/validator.js"
import chapterExists from "../middlewares/chapterExists.js"
import comicTitleExist from "../middlewares/comicTitleExist.js"

const router = express.Router()

const {create, read} = controller

router.post("/",validator(createSchema),chapterExists,comicTitleExist,create);
router.get("/", read);


export default router