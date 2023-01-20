import activeAuthor from "../middlewares/activeAuthor.js"
import authorcontroller from "../controllers/authors.controller.js"
import express from "express"
import passport from "passport"
import schema from "../schemas/authors.schema.js"
import updateSchema from "../schemas/update.author.schema.js"
import validator from "../middlewares/validator.js"
import isAuthor from "../middlewares/isAuthor.js"

const router = express.Router()
const { create, get_author, update } = authorcontroller

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    validator(schema),
    activeAuthor,
    create
)
router.get( 
    "/:id", 
    passport.authenticate("jwt", { session: false }), 
    get_author 
)

router.put( 
    "/me", 
    passport.authenticate("jwt", {session: false}), 
    validator(updateSchema), 
    isAuthor, 
    update 
)

export default router