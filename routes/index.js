import categories from "./categories.route.js";
import companies from "./companies.route.js";
import express from "express";
import comments from "./comments.route.js"
import users from "./users.route.js"

const router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("minga server ready");
});

router.use("/companies", companies);
router.use("/auth", users)
router.use("/categories", categories)
router.use("/comments", comments)

export default router;
