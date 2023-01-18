import activeAuthor from "../middlewares/activeAuthor.js"
import authorcontroller from "../controllers/authors.controller.js"
import express from "express"
import passport from "passport"
import schema from "../schemas/authors.schema.js"
import validator from "../middlewares/validator.js"

const router = express.Router()
const { create, get_author } = authorcontroller

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    validator(schema),
    activeAuthor,
    create
)
router.get("/:id", passport.authenticate("jwt", { session: false }), get_author)

export default router
