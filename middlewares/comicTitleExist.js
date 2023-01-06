import { Comic } from "../models/Comic.models.js";

async function comicTitleExist(req, res, next) {
    const comic = await Comic.findOne({ title: req.body.title })
    if (comic) {
        return res.status(400).json({
            success: false,
            response: [ { message: 'The comic already exist, try another name'} ] 
        })
    }
    return next()
}

export default comicTitleExist



