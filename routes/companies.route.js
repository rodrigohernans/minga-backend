import controller from "../controllers/companies.controller.js";
import express from "express"

const router = express.Router()

const { create } = controller

router.post("/", create)

export default router