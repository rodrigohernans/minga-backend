import activeCompany from "../middlewares/activeCompany.js";
import controller from "../controllers/companies.controller.js";
import {createSchema} from "../schemas/companies.schema.js";
import express from "express";
import validator from "../middlewares/validator.js";

const router = express.Router();

const { create } = controller;

router.post("/", activeCompany, validator(createSchema), create);

export default router;