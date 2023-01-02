import accountExistsSignIn from '../middlewares/accountExistsSignIn.js'
import accountExistsSignUp from '../middlewares/accountExistsSignUp.js'
import accountHasBeenVerified from './../middlewares/accountHasBeenVerified.js'
import controller from '../controllers/users.controller.js'
import express from 'express'
import mustSignIn from '../middlewares/mustSignIn.js'
import passport from '../config/passport.js'
import schema from '../schemas/signup.schema.js'
import validator from '../middlewares/validator.js'

let router = express.Router()
// import schema from '../schemas/auth.schema.js'

const { signup,signin,signintoken,signout,read } = controller



router.post('/signup',accountExistsSignUp,validator(schema),signup)
router.post('/signin',accountExistsSignIn,accountHasBeenVerified,signin)
router.post('/token',passport.authenticate('jwt', { session:false }),mustSignIn,signintoken)
router.put('/signout',passport.authenticate('jwt', { session:false }),signout)
router.get('/',read)

export default router