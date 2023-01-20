import activeCompany from "../middlewares/activeCompany.js"
import controller from "../controllers/companies.controller.js"
import { createSchema } from "../schemas/companies.schema.js"
import express from "express"
import passport from "passport"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_company, update } = controller

router.post("/", passport.authenticate("jwt", { session: false }), validator(createSchema), create)
router.get("/:id", passport.authenticate("jwt", { session: false }), get_company)

router.put("/:me", passport.authenticate("jwt", { session: false }), update )

export default router
