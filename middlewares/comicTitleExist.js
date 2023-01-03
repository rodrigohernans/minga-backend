import { Comic } from "../models/Comic.models.js";

async function comicTitleExist(req, res, next) {
    const comic = await Comic.findOne({ title: req.body.title })
    if (comic) {
        res.status(400).json({
            success: false,
            response: 'El comic ya existe, intenta otro nombre'
        })
    }
    return next()
}

export default comicTitleExist



