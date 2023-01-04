import activeAuthor from "../middlewares/activeAuthor.js"
import express from 'express'
import authorController from '../controllers/authors.controller.js'
import schema from "../schemas/companies.schema.js";
import validator from "../middlewares/validator.js";

const router= express.Router()

const {create} = authorController

router.post("/", activeAuthor, validator(schema), create)

export default router
