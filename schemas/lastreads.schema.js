import Joi from "joi-oid"

export const createSchema = Joi.object({
    comic_id: Joi.string().required(),
    chapter_id: Joi.string().required(),
    page: Joi.number().required(),
})

export const updateSchema = Joi.object({
    chapter_id: Joi.string().required(),
    page: Joi.number().required(),
})