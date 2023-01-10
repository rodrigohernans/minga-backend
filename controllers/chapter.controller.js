import { Chapter } from "../models/Chapter.model.js"

const controller = {

    create: async (req, res) => {
        try {
            await Chapter.create(req.body)
            res.status(201).json({
                success: true,
                response: req.body,
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                response: "Error al crear chapter",
            })
            console.log(error)
        }
    },

} 
export default controller

