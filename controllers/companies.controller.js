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
    get_company: async (req, res, netx) => {
        try {
            const { id } = req.params
            console.log(id)
            let companies = await Company.findById(id, "-_id -user_id -createdAt -updatedAt -active -__v")
            if(companies){
                res.status(200).json({
                    success: true,
                    response: companies,
                })
            } else{
                res.status(400).json({
                    success: false,
                    response: 'Company not found'
                })
            }
            
        } catch(error) {
            netx(error)
        }
    }
}

export default controller
