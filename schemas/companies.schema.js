import Joi from "joi-oid";

export const createSchema = Joi.object ({
    name: Joi.string().required().min(3).max(140).messages({
        "any.required" : "Name field is required!",
        "string.empty" : "Name field cannot be empty!",
        "string.min" : "Name field is too short! {#limit} characters minimum.",
        "string.max" : "Name field is too long! {#limit} characters maximum.",
        "string.base" : "Name field must include text!"
    }),
    logo: Joi.string().required().messages({
        "any.required" : "Logo field is required!",
        "string.empty" : "Logo field cannot be empty!",
        "string.base" : "Logo field must include text!"
    }),
    website: Joi.string().required().messages({
        "any.required" : "Website field is required!",
        "string.empty" : "Website field cannot be empty!",
        "string.base" : "Website field must include text!"
    }),
    description: Joi.string().required().min(10).message({
        "any.required" : "Description is required!",
        "string.empty" : "Description cannot be empty!",
        "string.min" : "Description is too short! {#limit} characters minimum.",
        "string.base" : "Description must include text!"
    }),
    user_id: Joi.string().required(),
    active: Joi.boolean().required(),
})