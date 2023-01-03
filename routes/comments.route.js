import controller from "../controllers/comments.controller.js"
import { createSchema } from "../schemas/comments.schema.js"
import express from "express"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create } = controller

// POST create a comment
router.post("/", validator(createSchema), create)


export default router