import { Company } from "../models/Company.model.js"

const controller = {
    create: async (req, res) => {
        try {
            await Company.create(req.body)
            res.status(201).json({
                success: true,
                response: req.body,
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                response: "Failure to create new company",
            })
            console.log(error)
        }
    },
}

export default controller