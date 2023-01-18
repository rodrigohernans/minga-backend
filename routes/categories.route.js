import controller from "../controllers/categories.controller.js"
import express from "express"
import passport from "passport"

const router = express.Router()

const { read, one, create, update, destroy } = controller

// POST create a category
router.post("/", passport.authenticate("jwt", { session: false }), create)

// GET all categories
router.get("/", passport.authenticate("jwt", { session: false }), read)

// GET one category
router.get("/:category_id", passport.authenticate("jwt", { session: false }), one)

// PUT update a category
router.put("/:category_id", passport.authenticate("jwt", { session: false }), update)

// DELETE delete a category
router.delete("/:category_id", passport.authenticate("jwt", { session: false }), destroy)

export default router
