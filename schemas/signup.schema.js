import Joi from 'joi-oid'

const schema = Joi.object({
    mail: Joi.string().email({ minDomainSegments: 2  }).min(10).max(50).required(),
    password: Joi.string().min(8).max(50).required(),
    photo: Joi.string().uri().min(10).max(100).required()
})

export default schema