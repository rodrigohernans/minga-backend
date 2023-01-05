import Joi from "joi-oid";

export const createSchema = Joi.object ({
    name: Joi.string().required().min(3).max(140).messages({
        "any.required" : "Field required.",
        "string.empty" : "Field cannot be empty.",
        "string.min" : "Field is too short.",
        "string.max" : "Field is too long.",
        "string.base" : "Field is not a text field"
    }),
    logo: Joi.string().required(),
    website: Joi.string().required(),
    description: Joi.string().required().min(10),
    user_id: Joi.string().required(),
    active: Joi.boolean().required(),
})