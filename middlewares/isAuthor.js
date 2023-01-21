import defaultResponse from "../config/response.js"

async function isAuthor(req, res, next){
    if(req.user.is_author){
        return next()
    }

    req.body.success = false
    req.body.sc = 401
    req.body.data = 'you are not an Author'
    return defaultResponse(req, res)
}

export default isAuthor

