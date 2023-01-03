import Joi from "joi-oid"

export const createSchema = Joi.object(
    {
        comic_id: Joi.objectId().required(),
        title: Joi.string().required().min(1),
        pages: Joi.array().items(Joi.string().uri()).required(),
        order: Joi.number()
    }
)