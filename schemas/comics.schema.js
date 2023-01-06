import Joi from 'joi-oid'

export const createSchema= Joi.object( {  
    author_id: Joi.objectId().required(),
    company_id: Joi.objectId(), 
    title: Joi.string().required().min(3).max(20).messages({
        "string.empty" : "Field cannot be empty",
        "string.min": "Field is too short, {#limit} characters min.",
        "string.max": "Field is too long, {#limit} characters maximum",
        "string.base": "Field is not a text field",
    }),
    photo: Joi.string().required().messages({
        "string.empty" : "Photo cannot be empty",
        
    }),
    description: Joi.string().required().min(3).max(200).messages({
        "string.empty" : "Description cannot be empty",
        "string.min": "Description is too short, {#limit} characters min",
        "string.max": "Description is too long, {#limit} characters maximum",
        "string.base": "Description is not a text field",
    }),
    category: Joi.objectId().required()
    }) 


