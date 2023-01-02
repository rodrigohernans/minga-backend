import controller from "../controllers/comments.controller.js"
import express from "express"
import schema from "../schemas/comments.schema.js"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create } = controller

// POST create a comment
router.post("/", validator(schema), create)


export default router