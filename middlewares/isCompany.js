import defaultResponse from "../config/response.js"

async function isCompany(req, res, next){
    if(req.user.is_company){
        return next()
    }

    req.body.success = false
    req.body.sc = 401
    req.body.data = 'you are not an Company'
    return defaultResponse(req, res)
}

export default isCompany