import { Reaction } from "../models/Reaction.model.js"

const controller = {
    create: async (req, res) => {
        try {
            let { comic_id, user_id, name } = req.body
            if (name === "like") {
                let foundLikeReaction = await Reaction.findOne({
                    comic_id,
                    user_id,
                    name: "like",
                })
                if (foundLikeReaction) {
                    await Reaction.findByIdAndDelete(foundLikeReaction._id)
                    res.status(200).json({
                        success: true,
                        response: req.body,
                    })
                } else {
                    await Reaction.create({ comic_id, user_id, name })
                    res.status(200).json({
                        success: true,
                        response: req.body,
                    })
                }
            } else if (name === "dislike") {
                let foundDislikeReaction = await Reaction.findOne({
                    comic_id,
                    user_id,
                    name: "dislike",
                })
                if (foundDislikeReaction) {
                    await Reaction.findByIdAndDelete(foundDislikeReaction._id)
                    res.status(200).json({
                        success: true,
                        response: req.body,
                    })
                } else {
                    await Reaction.create({ comic_id, user_id, name })
                    res.status(200).json({
                        success: true,
                        response: req.body,
                    })
                }
            } else if (name === "favorite") {
                let foundFavoriteReaction = await Reaction.findOne({
                    comic_id,
                    user_id,
                    name: "favorite",
                })
                if (foundFavoriteReaction) {
                    await Reaction.findByIdAndDelete(foundFavoriteReaction._id)
                    res.status(200).json({
                        success: true,
                        response: req.body,
                    })
                } else {
                    await Reaction.create({ comic_id, user_id, name })
                    res.status(200).json({
                        success: true,
                        response: req.body,
                    })
                }
            } else {
                // If the reaction doesn't exist, create it
                let newReaction = await Reaction.create(req.body)
                res.status(201).json({
                    success: true,
                    response: newReaction,
                })
            }
        } catch (error) {
            next(error)
        }
    },
    get_reactions: async (req, res, next) => {
        let consultas = {}
        let ordenamiento = {
            name: 1,
        }
        if (req.query.user_id) {
            consultas.user_id = req.query.user_id
        }
        if (req.query.comic_id) {
            consultas.comic_id = req.query.comic_id
        }
        if (req.query.sort) {
            ordenamiento = req.query.sort
        }
        try {
            let reactions = await Reaction.find(consultas, "-__v").sort(
                ordenamiento
            )
            let reactionsObject = {
                reactions: {
                    like: reactions.filter((reaction) => {
                        return reaction.name === "like"
                    }).length,
                    dislike: reactions.filter((reaction) => {
                        return reaction.name === "dislike"
                    }).length,
                    favorite: reactions.filter((reaction) => {
                        return reaction.name === "favorite"
                    }).length,
                },
                reacted: {
                    like: false,
                    dislike: false,
                    favorite: false,
                }
            }
            if (consultas.comic_id && consultas.user_id) {
                reactions.forEach((reaction) => {
                    if (reaction.name === "like") {
                        reactionsObject.reacted.like = true
                    } else if (reaction.name === "dislike") {
                        reactionsObject.reacted.dislike = true
                    } else if (reaction.name === "favorite") {
                        reactionsObject.reacted.favorite = true
                    }
                })
                res.status(200).json({
                    success: true,
                    response: reactionsObject,
                })
            } else if (consultas.comic_id) {
                res.status(200).json({
                    success: true,
                    response: reactionsObject,
                })
            }
        } catch (error) {
            next(error)
        }
    },
}

export default controller
