import express from 'express'
import authorController from '../controllers/authors.controller.js'
let router= express.Router()

const {create} = authorController

router.post("/", create)


export default router