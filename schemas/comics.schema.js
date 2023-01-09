import Joi from "joi-oid"

export const createSchema = Joi.object({
    author_id: Joi.objectId().required(),
    company_id: Joi.objectId(),
    title: Joi.string().required().min(3).max(20).messages({
        "any.required": "Title is a required field",
        "string.empty": "Title cannot be an empty field",
        "string.min": "Title must have a minimum length of {#limit}",
        "string.max": "Title must have a maximum length of {#limit}",
        "string.base": "Title must be a type of 'text'",
    }),
    photo: Joi.string().uri().required().messages({
        "any.required": "Photo is a required field",
        "string.empty": "Photo cannot be an empty field",
        "string.uri": "Photo must be a valid URL",
        "string.base": "Photo must be a type of 'text'",
    }),
    description: Joi.string().required().min(3).max(200).messages({
        "any.required": "Description is a required field",
        "string.empty": "Description cannot be an empty field",
        "string.min": "Description must have a minimum length of {#limit}",
        "string.max": "Description must have a maximum length of {#limit}",
        "string.base": "Description must be a type of 'text'",
    }),
    category: Joi.objectId().required(),
})
