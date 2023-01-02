import { User } from "../models/User.model.js"

const controller = {
  // CRUD
  create: async (req, res) => {
    try {
      await User.create(req.body)
      res.status(201).json({
        success: true,
        response: req.body,
      })
    } catch (error) {
      res.status(404).json({
        success: false,
        response: "Error creando el usuario",
      })
      console.log(error)
    }
  }, // Create a new user (POST)
  read: async (req, res) => {
    try {
      let users = await User.find()
      res.status(200).json({
        success: true,
        response: users,
      })
    } catch {
      res.status(404).json({
        success: false,
        response: "Error al obtener usuarios",
      })
    }
  }, // Read all users (GET)
  one: async (req, res) => {
    try {
      let { user_id } = req.params
      let user = await User.findById(user_id)
      res.status(200).json({
        success: true,
        response: user,
      })
    } catch (error) {
      res.status(404).json({
        success: false,
        response: "Error al obtener el usuario",
      })
      console.log(error)
    }
  }, // Read one user (GET)
  update: async (req, res) => {
    try {
      let { user_id } = req.params
      await User.findOneAndUpdate({ _id: user_id }, req.body, {
        new: true,
      })
      res.status(200).json({
        success: true,
        response: "Usuario actualizado",
      })
    } catch (error) {
      res.status(404).json({
        success: false,
        response: "Error al actualizar el usuario",
      })
      console.log(error)
    }
  }, // Update a user (PUT)
  destroy: async (req, res) => {
    try {
      let { user_id } = req.params
      await User.findByIdAndDelete(user_id)
      res.status(200).json({
        success: true,
        response: "Usuario eliminado",
      })
    } catch (error) {
      res.status(404).json({
        success: false,
        response: "Error al eliminar el usuario",
      })
      console.log(error)
    }
  }, // Delete a user (DELETE)
}

export default controller
