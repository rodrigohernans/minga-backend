import controller from "../controllers/users.controller.js"
import express from "express"

const router = express.Router()

const { read, one, create, update, destroy } = controller

// POST create a user
router.post("/" , create)

// GET all users
router.get("/" , read)

// GET one user
router.get("/:user_id" , one)

// PUT update a user
router.put("/:user_id" , update)

// DELETE delete a user
router.delete("/:user_id" , destroy)

export default router