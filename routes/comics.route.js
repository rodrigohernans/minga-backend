import controller from "../controllers/comics.controllers.js";
import express from 'express'
import schema from "../schema/comics.schema.js";

const router = express.Router() 


const { create } = controller

router.post('/', create) 

export default router  