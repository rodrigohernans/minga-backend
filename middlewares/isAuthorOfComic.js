import { Author } from "../models/Author.model.js"
import { Company } from "../models/Company.model.js"
import { Comic } from "../models/Comic.model.js"

const canEdit = async (req, res, next) => {

    if(req.user.is_author){
        const author = await Author.findOne({user_id: req.user.id})
        const comicFind = await Comic.findById(req.params.id)

        if(!comicFind.author_id.equals(author._id)){
            return res.status(400).json({
                success: false,
                response: [
                    {message: "is not author of this comic"}
                ]
            })
        }
    }
    if(req.user.is_company){
        const company = await Company.findOne({user_id: req.user.id})
        const comicFind = await Comic.findById(req.params.id)

        if(!comicFind.company_id.equals(company._id)){
            return res.status(400).json({
                success: false,
                response: [
                    {message: "is not company author of this comic"}
                ]
            })
        }
    }
    return next()
}

export default canEdit