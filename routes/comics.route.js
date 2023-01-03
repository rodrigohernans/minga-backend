import controller from "../controllers/comics.controllers.js";
import express from 'express'
import schema from "../schema/comics.schema.js";
import validator from "../middlewares/validator.js";

const router = express.Router() 


const { create } = controller

router.post('/', validator(schema) ,create)  

export default router  