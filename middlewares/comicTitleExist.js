import { Comic } from "../models/Comic.models.js";

async function comicTitleExist(req, res, next) {
    const comic = await Comic.findOne({ title: req.body.title })
    if (comic) {
        return res.status(400).json({
            success: false,
            response: [ { message: ' ✘ ERROR: THE COMIC ALREADY EXISTS, TRY ANOTHER NAME'} ] 
        })
    }
    return next()
}

export default comicTitleExist