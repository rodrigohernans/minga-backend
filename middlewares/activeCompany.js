import { Company } from "../models/Company.model.js";

async function activeCompany(req, res, next) {
    const company = await Company.findOne({ user_id: req.body.user_id })
    if (company) {
        if (company.active) {
            return next()
        }
        req.body.success = false
        req.body.sc = 400
        req.body.data = [{message: 'You must be an active company in order to publish.'}]
        return defaultResponse(req,res)
    } else {
        req.body.success = false
        req.body.sc = 404
        req.body.data = [{message: 'Company was not found.'}]
        return defaultResponse(req,res)
    }
}

export default activeCompany;