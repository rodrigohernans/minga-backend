import Joi from "joi-oid"

export const Schema = Joi.object({
    name: Joi.string().min(3).max(140).messages({
        "string.min": "Name must have a minimum length of {#limit}",
        "string.max": "Name must have a maximum length of {#limit}",
        "string.base": "Name must be a type of 'text'",
    }),
    logo: Joi.string().uri().messages({
        "string.base": "Website must be a type of 'text'",
    }),
    website: Joi.string().uri().messages({
        "string.base": "Website must be a type of 'text'",
    }),
    description: Joi.string().min(10).message({
        "string.min": "Description must have a minimum length of {#limit}",
        "string.base": "Description must be a type of 'text'",
    }),
    user_id: Joi.string(),
    active: Joi.boolean()
})

export default Schema