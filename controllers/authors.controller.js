import { Author } from "../models/Author.model.js"

const authorController = {
    create: async (req, res, next) => {
        try {
            const author = await Author.create(req.body)
            res.status(201).json({
                success: true,
                response: author,
            })
        } catch (error) {
            next(error)
        }
    },
    get_author: async (req, res, next) => {
        const { id } = req.params
        try {
            let author = await Author.find({ _id: id }, "-_id -user_id")
            if (author) {
                res.status(200).json({
                    success: true,
                    response: author,
                })
            } else {
                res.status(400).json({
                    success: false,
                    response: "Error obtaining Author",
                })
            }
        } catch (error) {
            next(error)
        }
    },
    update: async (req, res, next) => {
        const authorInfo = req.body;
        let user_id = req.user.id
        try {
            let result = await Author.findOneAndUpdate({user_id: user_id}, {$set: authorInfo}, {new: true});
            return res.status(200).json({
                success: true,
                message: result
            });
        } catch(error){
            next(error)
        }
    },
}

export default authorController
