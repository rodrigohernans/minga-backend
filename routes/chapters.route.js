import controller from "../controllers/chapter.controller.js"
import express from "express"
import schema from "../schemas/chapter.schema.js"
import validartor from "../middlewares/validator.js"

const router = express.Router()

const {create, read} = controller

router.post("/",validartor(schema),create)
router.get("/", read);


export default router