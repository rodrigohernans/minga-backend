import Joi from "joi-oid"

export const createSchema = Joi.object(
    {
        comic_id: Joi.objectId().required(),
        title: Joi.string().required().min(1).max(200)
        .messages({
            "any.required": " ✘ ERROR: TITLE REQUIRED",
            "string.empty": " ✘ ERROR: TITLE REQUIRED",
            "string.min": " ✘ ERROR: TITLE TOO SHORT",
            "string.max": " ✘ ERROR: TITLE TOO LARGE"
        }),
        pages: Joi.array().items(Joi.string().uri()).required()
        .messages({
            "any.required": " ✘ ERROR: PAGES REQUIRED",
            "string.empty": " ✘ ERROR: INVALID URL",
            "string.uri": " ✘ ERROR: INVALID URL"
        }),
        order: Joi.number()
    }
)