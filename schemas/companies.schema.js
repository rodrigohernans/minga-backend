import Joi from "joi-oid"

export const createSchema = Joi.object({
    name: Joi.string().required().min(3).max(140).messages({
        "any.required": "Name is a required field.",
        "string.empty": "Name cannot be an empty field.",
        "string.min": "Name must have a minimum length of {#limit}",
        "string.max": "Name must have a maximum length of {#limit}",
        "string.base": "Name must be a type of 'text'",
    }),
    logo: Joi.string().required().messages({
        "any.required": "Logo is a required field.",
        "string.empty": "Logo cannot be an empty field.",
    }),
    website: Joi.string().required().messages({
        "any.required": "Website is a required field.",
        "string.empty": "Website cannot be an empty field.",
    }),
    description: Joi.string().required().min(10).message({
        "any.required": "Description is a required field.",
        "string.empty": "Description cannot be an empty field.",
        "string.min": "Description must have a minimum length of {#limit}",
        "string.base": "Description must be a type of 'text'",
    }),
    user_id: Joi.string().required(),
    active: Joi.boolean().required(),
})
