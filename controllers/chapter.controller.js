import { Chapter } from "../models/Chapter.model.js";

const controller = {
  create: async (req, res) => {
    try {
      await Chapter.create(req.body);
      res.status(201).json({
        success: true,
        response: req.body,
      });
    } catch (error) {
      next(error);
    }
  },
  get_pages: async (req, res, next) => {
    try {
      const { id } = req.params;
      let chapter = await Chapter.findById(id);
      if (chapter) {
        res.status(200).json({
          success: true,
          response: chapter,
        });
      } else {
        res.status(400).json({
          success: false,
          response: "Error obtaining chapters",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default controller;
