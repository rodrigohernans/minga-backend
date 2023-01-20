import { LastRead } from "../models/LastRead.model.js"

const controller = {
    create: async (req, res) => {
        try {
            await LastRead.create(req.body)
            res.status(201).json({
                success: true,
                response: req.body,
            })
        } catch (error) {
            next(error)
        }
    },
    get_last_read: async (req, res, next) => {
        const { chapter_id } = req.params
        try {
            const last_read = await LastRead.find({ chapter_id: chapter_id })
            res.status(200).json({
                success: true,
                response: last_read,
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                response: "Error Obtaining Last Read",
            })
        }
    },
    get_last_reads: async (req, res, next) => {
        try {
            const last_reads = await LastRead.find({ user_id: req.user.id })
            res.status(200).json({
                success: true,
                response: last_reads,
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                response: "Error Obtaining Last Reads",
            })
        }
    },
    update: async (req, res, next) => {
        const { chapter_id } = req.params
        const { page } = req.body
        try {
            const last_read = await LastRead.findOneAndUpdate(
                { chapter_id: chapter_id, user_id: req.user.id },
                { page },
                { new: true }
            )
            res.status(200).json({
                success: true,
                response: last_read,
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                response: "Error Updating Last Read",
            })
        }
    },
}

export default controller
