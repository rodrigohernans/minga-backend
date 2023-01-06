import Joi from "joi-oid";

const schema = Joi.object ({
    name: Joi.string().required().min(3).max(140).messages({
        "any.required" : "Name is required.",
        "string.empty" : "Name cannot be empty.",
        "string.min" : "Name is too short.",
        "string.max" : "Name is too long."
    }),
    lastName: Joi.string(),
    city: Joi.string().required().min(3).max(140).messages({
        "any.required" : "City is required.",
        "string.empty" : "City cannot be empty.",
        "string.min" : "City is too short.",
        "string.max" : "City is too long."
    }),
    country: Joi.string().required().min(3).max(140).messages({
        "any.required" : "Country is required.",
        "string.empty" : "Country cannot be empty.",
        "string.min" : "Country is too short.",
        "string.max" : "Country is too long."
    }),
    date: Joi.date().messages({
        "string.base" : "Date is not a text field"
    }),
    photo: Joi.string().uri().required().messages({
        "any.required" : "Photo is required.",
        "string.empty" : "Photo cannot be empty."
    }),
    user_id: Joi.objectId().required(),
    active: Joi.boolean().required()
})

export default schema