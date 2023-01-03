import { Comic } from "../models/Comic.models.js"

const controller = {
    create: async (req, res) => {
        try {
            await Comic.create(req.body)
            res.status(201).json({
                success: true,
                response: req.body, 
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export default controller 