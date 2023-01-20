import { Chapter } from "../models/Chapter.model.js";
import { Comic } from "../models/Comic.model.js";
import { Comment } from "../models/Comment.model.js";

const controller = {
  // CRUD
  create: async (req, res) => {
    try {
      await Comment.create(req.body);
      res.status(201).json({
        success: true,
        response: req.body,
      });
    } catch (error) {
      next(error);
    }
  },
  get_comments: async (req, res, next) => {
    let consultas = {};
    let ordenamiento = { order: "desc" };
    let paginacion = { limit: 5 };
    const { commentable_id, chapter_id, comment_id } = req.query;
    if (req.query.commentable_id) {
      consultas.commentable_id = commentable_id;
    }
    if (req.query.chapter_id) {
      consultas.chapter_id = chapter_id;
    }
    if (req.query.comment_id) {
      req.query.comment_id = comment_id;
    }
    if (req.query.sort) {
      ordenamiento = req.query.sort;
    }
    if (req.query.limit) {
      paginacion.limit = req.query.limit;
    }
    try {
      const comments = await Comment.find(consultas)
        .sort(ordenamiento)
        .limit(paginacion.limit)
      res.status(200).json({
        success: true,
        response: comments,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        response: "Error obtaining comments!",
      });
    }
  },
};

export default controller;
