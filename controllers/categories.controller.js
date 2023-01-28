import { Category } from "../models/Category.model.js"
import { User } from "../models/User.model.js"
import defaultResponse from "../config/response.js"

const controller = {
    // CRUD
    create: async (req, res, next) => {
        try {
            await Category.create(req.body)
            req.body.success = true
            req.body.sc = 201
            req.body.data = "create"
            /*             res.status(201).json({
                            success: true,
                            response: req.body, */
            return defaultResponse(req, res)
        }
        catch (error) {
            next(error)
            /*             res.status(404).json({
                            success: false,
                            response: "Error al crear la categoría", */
        }
    }, // Create a new category (POST)
    read: async (req, res) => {
        try {
            let categories = await Category.find()
            res.status(200).json({
                success: true,
                response: categories,
            })
        } catch {
            res.status(400).json({
                success: false,
                response: "Error al obtener las categorías",
            })
        }
    }, // Read all categories (GET)
        one: async (req, res) => {
            try {
                let { category_id } = req.params
                let category = await Category.findById(category_id).populate(
                    "user_id"
                )
                res.status(200).json({
                    success: true,
                    response: category,
                })
            } catch (error) {
                res.status(404).json({
                    success: false,
                    response: "Error al obtener la categoría",
                })
                console.log(error)
            }
        }, // Read one category (GET)
            update: async (req, res) => {
                try {
                    let { category_id } = req.params
                    await Category.findOneAndUpdate({ _id: category_id }, req.body, {
                        new: true,
                        // return the updated document instead of the original,
                        // if false return the original document before update
                    })
                    res.status(200).json({
                        success: true,
                        response: "Categoría actualizada",
                    })
                } catch (error) {
                    res.status(404).json({
                        success: false,
                        response: "Error al actualizar la categoría",
                    })
                    console.log(error)
                }
            }, // Update a category (PUT)
                destroy: async (req, res) => {
                    try {
                        let { category_id } = req.params
                        await Category.findByIdAndDelete(category_id)
                        res.status(200).json({
                            success: true,
                            response: "Categoría eliminada",
                        })
                    } catch (error) {
                        res.status(404).json({
                            success: false,
                            response: "Error al eliminar la categoría",
                        })
                        console.log(error)
                    }
                }, // Delete a category (DELETE)
}

export default controller
