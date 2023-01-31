import chapterTitleExists from "../middlewares/chapterTitleExists.js"
import controller from "../controllers/chapter.controller.js"
import { createSchema } from "../schemas/chapter.schema.js"
import express from "express"
import orderExists from "../middlewares/orderExists.js"
import passport from "passport"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_pages, get_comic_chapters } = controller

router.post("/", passport.authenticate("jwt", { session: false }), validator(createSchema), orderExists, chapterTitleExists, create)

router.get("/:_id", passport.authenticate("jwt", { session: false }), get_pages)
router.get("/", passport.authenticate("jwt", { session: false }), get_comic_chapters)

export default router
