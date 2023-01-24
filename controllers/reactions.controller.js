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
            } else if (name === "favourite") {
                let foundFavouriteReaction = await Reaction.findOne({
                    comic_id,
                    user_id,
                    name: "favourite",
                })
                if (foundFavouriteReaction) {
                    await Reaction.findByIdAndDelete(foundFavouriteReaction._id)
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
        try {
            let { comic_id, user_id } = req.query
            let reactions = await Reaction.find({ comic_id })
            let likes = reactions.filter((reaction) => reaction.name === "like")
            let dislikes = reactions.filter(
                (reaction) => reaction.name === "dislike"
            )
            let favourites = reactions.filter(
                (reaction) => reaction.name === "favourite"
            )
            let reacted = {
                likes: false,
                dislikes: false,
                favourites: false,
            }
            if (user_id) {
                let userReactions = reactions.filter(
                    (reaction) => reaction.user_id == user_id
                )
                if (userReactions.length > 0) {
                    userReactions.forEach((reaction) => {
                        if (reaction.name === "like") {
                            reacted.likes = true
                        } else if (reaction.name === "dislike") {
                            reacted.dislikes = true
                        } else if (reaction.name === "favourite") {
                            reacted.favourites = true
                        }
                    })
                }
            }
            
            res.status(200).json({
                success: true,
                response: {
                    comic_id,
                    reacted,
                    reactions: {
                        like: {
                            count: likes.length,
                            user_ids: likes.map((like) => like.user_id),
                        },
                        dislike: {
                            count: dislikes.length,
                            user_ids: dislikes.map((dislike) => dislike.user_id),
                        },
                        favourite: {
                            count: favourites.length,
                            user_ids: favourites.map(
                                (favourite) => favourite.user_id
                            ),
                        },
                    },
                },
            })
        } catch (error) {
            next(error)
        }
    },
    get_user_favourites: async (req, res, next) => {
        let token = req.headers.authorization.split(" ")[1]
        try {
            let { user_id } = req.params
            let { limit, category_id, order } = req.query
            let favourites = await Reaction.find({
                user_id,
                name: "favourite",
            })
            .limit(parseInt(limit))
            .populate("comic_id")
            .sort({ createdAt: order })
            let favouriteComics = favourites.map((favourite) => favourite.comic_id)
            if (category_id) {
                favouriteComics = favouriteComics.filter(
                    (comic) => comic.category_id == category_id
                )
            }
            if (favouriteComics.length === 0) {
                res.status(400).json({
                    success: false,
                    message: "No comics found matching the filters",
                })
            } else {
                res.status(200).json({
                    success: true,
                    response: favouriteComics,
                })
            }
        } catch (error) {
            next(error)
        }
    },
}

export default controller
