import { Author } from "../models/Author.model.js";
import { Chapter } from "../models/Chapter.model.js";
import { Comic } from "../models/Comic.model.js";
import defaultResponse from "../config/response.js";

export const verifyAuthor = async (req, res, next) => {
    // este es id del usuario/autor  que viene logueado traido desde passport
    const user = req.user.id
    console.log(user)

    const { id } = req.params
    let chapter = await Chapter.findById(id)
        .populate({
            path: "comic_id", populate: {
                path: "author_id",
                model: "authors"
            }
        })
    const { user_id } = chapter.comic_id.author_id
    console.log(user_id)
    if (user.equals(user_id)) {
        console.log("entro")
        return next();
    }
    req.body.success = false;
    req.body.sc = 400;
    req.body.data =
        "You must to be the author of the comic to be able to modify or delete";
    return defaultResponse(req, res);

}

    //aca vamos a popular chapter con comic_id para encontrar el id del autor... ahora esta info de arriba me tira el user_id del autor.. pero lo que me interesa es el id_ de ese autor.. la idea es que si ese autor esta verificado para  a este middle... entonces una vez verificado la cosa es asi... el _id de este usuario es igual al id del comic que tiene autor_id .. 

/*   const { comic_id } = req.param
    let comic = await Comic.findOne(comic_id)
    console.log(comic) */