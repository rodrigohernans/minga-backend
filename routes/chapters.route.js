import controller from "../controllers/chapter.controller.js"
import express from "express"
import schema from "../schemas/chapter.schema.js"
import validator from "../middlewares/validator.js"

const router = express.Router()

const {create, read} = controller

router.post("/",validator(schema),create);
router.get("/", read);


export default router