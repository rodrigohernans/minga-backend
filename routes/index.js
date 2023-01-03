import comics from './comics.route.js'
import express from "express"

const router = express.Router() 



/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
})

router.use('/api/comics', comics) //se usa esta ruta 

export default router 
