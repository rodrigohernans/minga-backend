import Joi from "joi";

const schema = Joi.object ({
    name: Joi.string().required().min(3).max(140),
    logo: Joi.string().required(),
    website: Joi.string().required(),
    description: Joi.string().required().min(10),
    user_id: Joi.string().required(),
    active: Joi.boolean().required(),
})

export default schema