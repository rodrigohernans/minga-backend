import { Chapter } from "../models/Chapter.model.js"

const controller = {
    // CRUD
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
    }, // Create a new category (POST)
    read: async (req, res) => {
        try {
            let chapter = await Chapter.find()
            res.status(200).json({
                success: true,
                response: chapter,
            })
        } catch {
            res.status(400).json({
                success: false,
                response: "Error al obtener el chapter",
            })
        }
    }, // Read all categories (GET)
    one: async (req, res) => {
        try {
            let { chapter_id } = req.params
            let chapter = await Category.findById(chapter_id).populate("comic_id")
            res.status(200).json({
                success: true,
                response: chapter,
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                response: "Error al obtener el chapter",
            })
            console.log(error)
        }
    }, // Read one category (GET)
    update: async (req, res) => {
        try {
            let { chapter_id } = req.params
            await Chapter.findOneAndUpdate({ _id: chapter_id }, req.body, {
                new: true,
                // return the updated document instead of the original, 
                // if false return the original document before update
            })
            res.status(200).json({
                success: true,
                response: "Chapter actualizado",
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                response: "Error al actualizar el chapter",
            })
            console.log(error)
        }
    }, // Update a category (PUT)
    destroy: async (req, res) => {
        try {
            let { chapter_id } = req.params
            await Chapter.findByIdAndDelete(chapter_id)
            res.status(200).json({
                success: true,
                response: "Chapter eliminado",
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                response: "Error al eliminar el chapter",
            })
            console.log(error)
        }
    }, // Delete a category (DELETE)
}

export default controller