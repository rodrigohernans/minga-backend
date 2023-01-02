import controller from "../controllers/chapter.controller.js"
import express from "express"

const router = express.Router()

const { read, create, one } = controller

// // POST create a chapter
router.post("/",create)

// GET all chapter
router.get("/", read)

// // GET one chapter
router.get("/:chapter_id", one)

// // PUT update a chapter
// router.put("/:chapter_id", update)

// // DELETE delete a chapter
// router.delete("/:chapter_id", destroy)


export default router