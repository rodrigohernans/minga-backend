import controller from "../controllers/comments.controller.js"
import { createSchema } from "../schemas/comments.schema.js"
import express from "express"
import passport from "passport"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create } = controller

// POST create a comment
router.post("/", passport.authenticate("jwt", { session: false }), validator(createSchema), create)

export default router
