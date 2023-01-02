import { User } from '../models/User.js'
import defaultResponse from '../config/response.js'

async function accountExistsSignIn(req,res,next) {
    const user = await User.findOne({mail: req.body.mail})
    if (user) {
        req.user = { //inyecto al req la propiedad user con los datos que necesito
            id: user._id,
            mail: user.mail,
            photo: user.photo,
            password: user.password,
            is_verified: user.is_verified
        }
        return next() //continuo con el middleware o metodo programado en la ruta
    }
    req.body.success = false
    req.body.sc = 400
    req.body.data = 'user does not exist!'
    return defaultResponse(req,res)
}

export default accountExistsSignIn