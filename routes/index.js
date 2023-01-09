import express from "express";
import comics from './comics.route.js'
import categories from "./categories.route.js";
import companies from "./companies.route.js";
import comments from "./comments.route.js"
import users from "./users.route.js"
import chapters from "./chapters.route.js"
const router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("minga server ready");
});

router.use("/companies", companies);
router.use("/auth", users)
router.use("/categories", categories)
router.use("/chapters", chapters)
router.use('/comics', comics) //se usa esta ruta 
router.use("/comments", comments)

export default router;
