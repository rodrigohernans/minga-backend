import { User } from "../models/User.model.js"
import bcryptjs from "bcryptjs" 
import crypto from "crypto" 
import defaultResponse from "../config/response.js"
import jwt from "jsonwebtoken" 

const controller = {
    signup: async (req, res, next) => {
        req.body.is_online = false 
        req.body.is_admin = false
        req.body.is_author = false
        req.body.is_company = false
        req.body.is_verified = true 
        req.body.verify_code = crypto.randomBytes(10).toString("hex")
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
        try {
            await User.create(req.body)
            req.body.success = true
            req.body.sc = 201 
            req.body.data = "user created" 
            return defaultResponse(req, res) 
        } catch (error) {
            next(error) 
        }
    },

    signin: async (req, res, next) => {
        let { password } = req.body
        let { user } = req
        try {
            const verified = bcryptjs.compareSync(password, user.password) 
            if (verified) {
                await User.findOneAndUpdate(
                    { mail: user.mail }, 
                    { is_online: true }, 
                    { new: true } 
                )
                let token = jwt.sign(
                    { id: user.id }, 
                    process.env.KEY_JWT, 
                    { expiresIn: 60 * 60 * 24 } 
                )

                user = {
                    mail: user.mail,
                    photo: user.photo,
                    id: user.id
                }
                req.body.success = true
                req.body.sc = 200
                req.body.data = { user, token }
                return defaultResponse(req, res)
            }
            req.body.success = false
            req.body.sc = 400
            req.body.data = "invalid credentials"
            return defaultResponse(req, res)
        } catch (error) {
            next(error) 
        }
    },

    signintoken: async (req, res, next) => {
        let { user } = req
        try {
            req.body.success = true
            req.body.sc = 200
            req.body.data = { user }
            return defaultResponse(req, res)
        } catch (error) {
            next(error)
        }
    },

    signout: async (req, res, next) => {
        const { mail } = req.user
        try {
            await User.findOneAndUpdate(
                { mail }, 
                { is_online: false },
                { new: true } 
            )
            req.body.success = true
            req.body.sc = 200
            req.body.data = "come back soon!"
            return defaultResponse(req, res)
        } catch (error) {
            next(error)
        }
    },

    read: async (req, res, next) => {
        try {
            let all = await User.find()
            if (all) {
                req.body.success = true
                req.body.sc = 200
                req.body.data = { all }
                return defaultResponse(req, res)
            } else {
                req.body.success = false
                req.body.sc = 404
                req.body.data = "no users yet"
                return defaultResponse(req, res)
            }
        } catch (error) {
            next(error)
        }
    },
}

export default controller