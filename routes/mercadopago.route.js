const router = express.Router()

import { crearOrden } from "../controllers/mercadopago.controller.js"
import express from "express"
import passport from "passport"

router.post("/crear-orden", passport.authenticate("jwt", { session: false }) ,crearOrden)
/* router.post("/notificacion", notificacionOrden ) */
export default router 


