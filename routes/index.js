import authors from "./authors.route.js"
import categories from "./categories.route.js"
import chapters from "./chapters.route.js"
import comics from "./comics.route.js"
import comments from "./comments.route.js"
import companies from "./companies.route.js"
import express from "express"
import reactions from "./reactions.route.js"
import users from "./users.route.js"
import lastreads from "./lastreads.route.js"
import mercadopago from "./mercadopago.route.js"

const router = express.Router()

router.get("/", function (req, res, next) {
    res.send("minga server ready")
})

router.use("/company", companies)
router.use("/auth", users)
router.use("/categories", categories)
router.use("/authors", authors)
router.use("/chapters", chapters)
router.use("/comics", comics)
router.use("/comments", comments)
router.use("/reactions", reactions)
router.use("/lastreads", lastreads)
router.use("/donations", mercadopago) 

export default router
