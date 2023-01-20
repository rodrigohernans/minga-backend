import activeAuthor from "../middlewares/activeAuthor.js"
import activeCompany from "../middlewares/activeCompany.js"
import comicTitleExists from "../middlewares/comicTitleExists.js"
import controller from "../controllers/comics.controllers.js"
import { createSchema } from "../schemas/comics.schema.js"
import express from "express"
import passport from "passport"
import validator from "../middlewares/validator.js"

const router = express.Router()

const {
    create,
    get_comics,
    get_comic,
    get_comics_from_cia,
    get_comics_from_author,
    get_comics_from_company,
} = controller

router.post("/", comicTitleExists, validator(createSchema), create)
router.get("/me", passport.authenticate("jwt", { session: false }), get_comics_from_company)
router.get("/", passport.authenticate("jwt", { session: false }), get_comics)
router.get(
    "/profile/company/",
    passport.authenticate("jwt", { session: false }),
    get_comics_from_cia
)
router.get(
    "/profile/author",
    passport.authenticate("jwt", { session: false }),
    get_comics_from_author
)

router.get("/:id", passport.authenticate("jwt", { session: false }), get_comic)

export default router
