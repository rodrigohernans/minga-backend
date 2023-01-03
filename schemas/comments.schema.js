import Joi from 'joi-oid'

export const createSchema = Joi.object({
  text: Joi.string().required().min(1).max(200).messages({
    'string.base': `debe ser de tipo String`,
    'string.empty': `no puede estar vacío`,
    'string.min': `debe tener al menos 1 caracter`,
    'string.max': `debe tener como máximo 200 caracteres`,
    'any.required': `es un campo requerido`,
  }),
  user_id: Joi.objectId().required(),
  chapter_id: Joi.objectId().required(),
  commentable_id: Joi.objectId().required(),
})