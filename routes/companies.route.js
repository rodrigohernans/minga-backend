import activeCompany from "../middlewares/activeCompany.js";
import controller from "../controllers/companies.controller.js";
import express from "express";
import schema from "../schemas/companies.schema.js";
import validator from "../middlewares/validator.js";

const router = express.Router();

const { create } = controller;

router.post("/", activeCompany, validator(schema), create);

export default router;