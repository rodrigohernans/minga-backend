import defaultResponse from '../config/response.js'

function mustSignIn(req, res, next) {
    if(req.user) {
        return next()
    }
    req.body.success = false
    req.body.sc = 400
    req.body.data = 'must sign in!'
    return defaultResponse(req,res)
}

export default mustSignIn