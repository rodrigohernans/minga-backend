import Joi from "joi-oid";

const schema = Joi.object ({
    name: Joi.string().required().min(3).max(140).message({
        "any.required" : "Field required.",
        "string.empty" : "Field cannot be empty.",
        "string.min" : "Field is too short.",
        "string.max" : "Field is too long.",
        "string.base" : "Field is not a text field"
    }),
    lastName: Joi.string(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    date: Joi.date(),
    photo: Joi.string().uri().required(),
    user_id: Joi.objectId().required(),
    active: Joi.boolean().required(),
})

export default schema