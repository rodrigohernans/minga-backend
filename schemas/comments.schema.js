import Joi from 'joi-oid'

export const createSchema = Joi.object({
  text: Joi.string().required().min(1).max(200).messages({
    'any.required': `text is a required field`,
    'string.empty': `text cannot be an empty field`,
    'string.min': `text must have a minimum length of {#limit}`,
    'string.max': `text must have a maximum length of {#limit}`,
    'string.base': `text must be a type of 'text'`
  }),
  user_id: Joi.objectId().required(),
  chapter_id: Joi.objectId().required(),
  commentable_id: Joi.objectId().required(),
})