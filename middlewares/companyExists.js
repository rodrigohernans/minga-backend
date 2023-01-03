import { Company } from "../models/Company.model.js";

async function companyAlreadyExists(req, res, next) {
    const company = await Company.findOne({ title: req.body.title })
    if (company) {
        res.status(400).json({
            success: false,
            response: 'This company already exists.'
        })
    }
    return next()
}

export default companyAlreadyExists