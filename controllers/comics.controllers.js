import { Comic } from "../models/Comic.models.js"

const controller = {
    create: async (req, res) => {
        try {
            
            let comic = await Comic.create(req.body)
            res.status(201).json({
                success: true,
                response: 'done',
                new_comic: comic
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export default controller 