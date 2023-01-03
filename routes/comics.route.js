import controller from "../controllers/comics.controllers.js"
import { createSchema } from "../schemas/comics.schema.js"
import express from "express"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create } = controller

router.post("/", validator(createSchema), create)

export default router
