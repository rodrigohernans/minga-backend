import Joi from 'joi-oid'

const schema= Joi.object( {  
    author_id: Joi.objectId().required(),
    company_id: Joi.objectId(), 
    title: Joi.string().required().min(3).max(20).messages({
        "string.empty" : "campo requerido, por favor ingresalo",
        "string.min": "minimo 3 letras",
        "string.max": "maximo 20 letras",
        "string.base": "debe ser de tipo texto",
    }),
    photo: Joi.string().required(),
    description: Joi.string().required().min(3).max(200).messages({
        "string.empty" : "campo requerido, por favor ingresalo",
        "string.min": "minimo 3 letras",
        "string.max": "maximo 200 letras",
        "string.base": "debe ser de tipo texto",
    }),
    category: Joi.objectId().required()
    })

export default schema 