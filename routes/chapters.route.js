import { createSchema, deleteChapter } from "../schemas/chapter.schema.js"

import comicTitleExists from "../middlewares/comicTitleExists.js"
import controller from "../controllers/chapter.controller.js"
import express from "express"
import orderExists from "../middlewares/orderExists.js"
import passport from "passport"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_pages, get_comic_chapters, update, destroy } = controller

router.post("/", passport.authenticate("jwt", { session: false }), validator(createSchema), orderExists, comicTitleExists, create)

router.get("/:_id", passport.authenticate("jwt", { session: false }), get_pages)
router.get("/", passport.authenticate("jwt", { session: false }), get_comic_chapters)

router.put("/:id", passport.authenticate("jwt", { session: false }), update ) 
router.delete("/:id", passport.authenticate("jwt", { session: false }), validator(deleteChapter) ,destroy) 
export default router