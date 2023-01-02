import { User } from '../models/User.js'
import defaultResponse from '../config/response.js'

async function accountExistsSignUp(req,res,next) {
    const user = await User.findOne({mail: req.body.mail})
    if (user) {
        req.body.success = false
        req.body.sc = 400
        req.body.data = 'user already exist!'
        return defaultResponse(req,res)        
    }
    return next() //continuo con el middleware o metodo programado en la ruta
}

export default accountExistsSignUp