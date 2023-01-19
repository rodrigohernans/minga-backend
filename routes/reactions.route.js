import controller from "../controllers/reactions.controller.js"
import { createSchema } from "../schemas/reactions.schema.js"
import express from "express"
import oppositeReactionExists from "../middlewares/oppositeReactionExists.js"
import passport from "passport"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_reactions } = controller

router.post("/", passport.authenticate("jwt", { session: false }), validator(createSchema), oppositeReactionExists, create)

router.get("/", passport.authenticate("jwt", { session: false }), get_reactions)

export default router