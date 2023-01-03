import defaultResponse from '../config/response.js'

function accountHasBeenVerified(req, res, next) {
    if (req.user.is_verified) {
        return next()
    }
    req.body.success = false
    req.body.sc = 400
    req.body.data = 'verify your account!'
    return defaultResponse(req,res)
}

export default accountHasBeenVerified