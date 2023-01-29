import controller from "../controllers/comments.controller.js"
import { createSchema } from "../schemas/comments.schema.js"
import express from "express"
import passport from "passport"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_comments } = controller

router.post("/", passport.authenticate("jwt", { session: false }), validator(createSchema), create)
router.get("/", passport.authenticate("jwt", {session: false}), get_comments)

export default router
