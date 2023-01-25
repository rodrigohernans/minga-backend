import { Chapter } from "../models/Chapter.model.js";
import defaultResponse from "../config/response.js";

export const verifyAuthor = async (req, res, next) => {
    // este es id del usuario/autor  que viene logueado traido desde passport
    const user = req.user.id

    console.log(user) 

    const { id } = req.params
    let chapter = await Chapter.findById(id) 
        .populate({
            path: "comic_id", 
            populate: {
                path: "author_id",
                model: "authors"
            }
        }) 



    const { user_id } = chapter.comic_id.author_id
    console.log(user_id)
    if (user.equals(user_id) ) {
        return next();
    } 
    req.body.success = false;
    req.body.sc = 400;
    req.body.data =
        "You must to be the author of the comic to be able to modify or delete";
    return defaultResponse(req, res);
}


