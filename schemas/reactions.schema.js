import Joi from "joi-oid"

export const createSchema = Joi.object({
    name: Joi.string().required().min(1).max(200).messages({
        "any.required": `Reaction is a required field`,
        "string.empty": `Reaction cannot be an empty field`,
        "string.min": `Reaction must have a minimum length of {#limit}`,
        "string.max": `Reaction must have a maximum length of {#limit}`,
        "string.base": `Reaction must be a type of 'text'`,
    }),
    comic_id: Joi.objectId().required(),
    user_id: Joi.objectId().required(),
})