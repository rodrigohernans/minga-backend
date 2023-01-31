import controller from "../controllers/lastreads.controller.js"
import express from "express"
import passport from "passport"
import { createSchema, updateSchema } from "../schemas/lastreads.schema.js"
import validator from "../middlewares/validator.js"
import lastReadExists from "../middlewares/lastReadExists.js"

const router = express.Router()
const { create, get_last_read, get_last_reads, update, destroy } = controller

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    validator(createSchema),
    lastReadExists,
    create
)

router.get("/:chapter_id", passport.authenticate("jwt", { session: false }), get_last_read)
router.get("/", passport.authenticate("jwt", { session: false }), get_last_reads)
router.put(
    "/:chapter_id",
    passport.authenticate("jwt", { session: false }),
    validator(updateSchema),
    update
)

export default router
