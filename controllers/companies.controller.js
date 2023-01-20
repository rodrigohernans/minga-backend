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
            next(error)
        }
    },
    get_company: async (req, res, next) => {
        try {
            const { id } = req.params
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
            next(error)
        }
    },
    update: async (req, res, next) => {
        const companyInfo = req.body;
            try{
            let result = await Company.findOneAndUpdate({_id: companyInfo._id}, {$set: companyInfo});
            return res.status(200).json({
                success: true,
                message: 'Company updated successfully'
            });
            } catch(error){
               next(error)
                };
            },
}

export default controller
