import { Comic } from "../models/Comic.models.js"

const controller = {
  create: async (req, res, next) => {
    try {
      await Comic.create(req.body)
      res.status(201).json({
        success: true,
        response: req.body,
      })
    } catch (error) {
      next(error)
    }
  },
  get_comic: async (req, res, next) => {
    try {
      const { id } = req.params
      let comic = await Comic.findById(id, '-author_id -_id -company_id -category')
      if (comic) {
        res.status(200).json({
          success: true,
          response: comic
        })
      } else {
        res.status(400).json({
          success: false,
          response: 'comic not found'
        })
      }
    } catch (error) {
      next(error)
    }
  }
}

export default controller


