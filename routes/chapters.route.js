import { createSchema, deleteChapter, updateChapter } from "../schemas/chapter.schema.js"

import comicTitleExists from "../middlewares/comicTitleExists.js"
import controller from "../controllers/chapter.controller.js"
import express from "express"
import isAuthor from "../middlewares/isAuthor.js"
import orderExists from "../middlewares/orderExists.js"
import passport from "passport"
import validator from "../middlewares/validator.js"
import { verifyAuthor } from "../middlewares/verifyAuthor.js"

const router = express.Router()

const { create, get_pages, get_comic_chapters, update, destroy } = controller

router.post("/", passport.authenticate("jwt", { session: false }), validator(createSchema), orderExists, comicTitleExists, create)

router.get("/:_id", passport.authenticate("jwt", { session: false }), get_pages,)
router.get("/", passport.authenticate("jwt", { session: false }), get_comic_chapters)

router.put("/:id", passport.authenticate("jwt", { session: false }) , validator(updateChapter) , isAuthor, verifyAuthor , update) 
router.delete("/:id", passport.authenticate("jwt", { session: false }),validator(deleteChapter), isAuthor ,verifyAuthor , destroy)
export default router 
