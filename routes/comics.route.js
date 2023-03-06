import activeAuthor from "../middlewares/activeAuthor.js"
import activeCompany from "../middlewares/activeCompany.js"
import comicTitleExists from "../middlewares/comicTitleExists.js"
import controller from "../controllers/comics.controllers.js"
import { createSchema } from "../schemas/comics.schema.js"
import { editComic } from "../schemas/comicEdit.schema.js"
import express from "express"
import isAuthorOfComic from "../middlewares/isAuthorOfComic.js"
import passport from "passport"
import validator from "../middlewares/validator.js"

const router = express.Router()

const {
    create,
    get_comics,
    get_comic,
    get_comics_from_cia,
    get_comics_from_author,
    get_comics_from_CompanyOrAuthor,
    edit_comic,
    delete_comic,
} = controller

router.post("/", comicTitleExists, validator(createSchema), create)
router.get("/me", passport.authenticate("jwt", { session: false }), get_comics_from_CompanyOrAuthor)
router.get("/", get_comics)
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
router.put("/:id", passport.authenticate("jwt", { session: false }), isAuthorOfComic, validator(editComic), edit_comic)
router.delete("/:id", passport.authenticate("jwt", { session: false }), isAuthorOfComic, delete_comic)

export default router
