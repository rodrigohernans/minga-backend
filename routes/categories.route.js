import controller from "../controllers/categories.controller.js"
import express from "express"

const router = express.Router()

const { read, one, create, update, destroy } = controller

// POST create a category
router.post("/",create)

// GET all categories
router.get("/", read)

// GET one category
router.get("/:category_id", one)

// PUT update a category
router.put("/:category_id", update)

// DELETE delete a category
router.delete("/:category_id", destroy)


export default router