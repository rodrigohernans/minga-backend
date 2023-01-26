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
    if (req.query.limit) {
      paginacion.limit = req.query.limit;
    }
    try {
        const comments = await Comment.find(consultas)
          .sort({createdAt: "desc"})
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
  edit_comment: async (req, res, next) => {
    try {
      const { id } = req.user
      const { comment_id } = req.params
      let comment = await Comment.findOneAndUpdate(
        { _id: comment_id, user_id: id},
        req.body,
        {new: true}
      )
      res.status(200).json({
        success: true,
        response: comment
      })
    }
    catch (error) {
      next(error)
    }
  },
  delete_comment: async (req, res, next) => {
    try {
        const { id } = req.user
        const { comment_id } = req.params
        await Comment.findOneAndDelete(
          { _id: comment_id, user_id: id},
            )
        res.status(200).json({
            success: true,
            response: comment_id
        })
    }
    catch (err) {
        next(err)
    }
}
}

export default controller;
