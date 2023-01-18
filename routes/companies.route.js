import activeCompany from "../middlewares/activeCompany.js"
import controller from "../controllers/companies.controller.js"
import { createSchema } from "../schemas/companies.schema.js"
import express from "express"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create, get_company } = controller

router.post("/", validator(createSchema), create)
router.get("/:id", get_company)

export default router
