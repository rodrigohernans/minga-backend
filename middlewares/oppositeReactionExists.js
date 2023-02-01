import { Reaction } from '../models/Reaction.model.js'

async function oppositeReactionExists(req, res, next) {
    let { id } = req.user
    let { comic_id, name } = req.body
    let oppositeName = name === 'like' ? 'dislike' : 'like'
    let foundOppositeReaction = await Reaction.findOne({ comic_id, user_id: id, name: oppositeName })
    if (foundOppositeReaction) {
        // If the opposite reaction exists, delete it
        await Reaction.findByIdAndDelete(foundOppositeReaction._id)
        // If the opposite reaction exists, we create the opposite reaction
        await Reaction.create({ comic_id, user_id: id, name })
        res.status(200).json({
            success: true,
            response: "Opposite reaction deleted and new reaction created"
        })
    } else {
        // If the opposite reaction doesn't exist, continue to the next middleware
        next()
    }
}

export default oppositeReactionExists