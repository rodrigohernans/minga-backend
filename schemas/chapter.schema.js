import Joi from "joi-oid"

const schema = Joi.object(
    {
        comic_id: Joi.objectId().required(),
        title: Joi.string().required().min(1),
        pages: Joi.array().required(),
        order: Joi.number()
    }
)

export default schema