import controller from "../controllers/comments.controller.js"
import { createSchema } from "../schemas/comments.schema.js"
import express from "express"
import isSameUser from "../middlewares/isSameUser.js"
import passport from "passport"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_comments, edit_comment, delete_comment } = controller

router.post("/", passport.authenticate("jwt", { session: false }), validator(createSchema), create)
router.get("/", passport.authenticate("jwt", {session: false}), get_comments)
router.put("/:comment_id", passport.authenticate("jwt", {session: false}), isSameUser, edit_comment)
router.delete("/:comment_id", passport.authenticate("jwt", {session: false}), isSameUser, delete_comment)

export default router