import 'dotenv/config.js'
import './config/database.js'

import { __dirname } from "./utils.js"
import cors from "cors"
import createError from "http-errors"
import { errorHandler } from './middlewares/errorHandler.js'
import express from "express"
import indexRouter from "./routes/index.js"
import logger from "morgan"
import { notFoundHandler } from './middlewares/notFoundHandler.js'
import path from "path"

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use("/api", indexRouter)
app.use(notFoundHandler)
app.use(errorHandler)

export default app