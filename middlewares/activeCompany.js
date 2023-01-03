import { Company } from "../models/Company.model.js";

async function activeCompany(req, res, next) {
    const company = await Company.findOne({ active: req.body.active })
    if (company) {
        return next();
    } else {
        res.status(400).json({
            success: false,
            response: "You must be an active company in order to publish,"
        })
    }
}

export default activeCompany;
