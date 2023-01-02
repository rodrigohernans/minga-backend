import controller from "../controllers/comments.controller.js"
import express from "express"

const router = express.Router()

const { create } = controller

// POST create a comment
router.post("/", create)


export default router