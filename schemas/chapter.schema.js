import Joi from "joi-oid"

export const createSchema = Joi.object({
    comic_id: Joi.objectId().required(),
    title: Joi.string().required().min(1).max(200).messages({
        "any.required": "Title is a required field",
        "string.empty": "Title cannot be an empty field",
        "string.min": "Title must have a minimum length of {#limit}",
        "string.max": "Title must have a maximum length of {#limit}",
        "string.base": "Title must be a type of 'text'",
    }),
    pages: Joi.array().items(Joi.string().uri()).required().messages({
        "any.required": "Pages is a required field",
        "array.base": "Pages must be an array",
    }),
    order: Joi.number(),
})

export const updateChapter = Joi.object({
    comic_id: Joi.objectId().required(),
    title: Joi.string().required().min(1).max(200).messages({
        "any.required": "Title is a required field",
        "string.empty": "Title cannot be an empty field",
        "string.min": "Title must have a minimum length of {#limit}",
        "string.max": "Title must have a maximum length of {#limit}",
        "string.base": "Title must be a type of 'text'",
    }),
    order: Joi.number().required,
})

export const deleteChapter = Joi.object({
    comic_id: Joi.objectId().required(),
    title: Joi.string().required().min(1).max(200).messages({
        "any.required": "Title is a required field",
        "string.empty": "Title cannot be an empty field",
        "string.min": "Title must have a minimum length of {#limit}",
        "string.max": "Title must have a maximum length of {#limit}",
        "string.base": "Title must be a type of 'text'",
    }),
}) 

