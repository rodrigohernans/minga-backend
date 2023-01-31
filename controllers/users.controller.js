import { User } from "../models/User.model.js";
import accountVerificationMail from "../config/accountVerificationMail.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import defaultResponse from "../config/response.js";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const controller = {
  signup: async (req, res, next) => {
    const user = {
      mail: req.body.mail,
      password: req.body.password,
      photo: req.body.photo,
      is_online: false,
      is_admin: false,
      is_author: false,
      is_company: false,
      is_verified: false,
      verify_code: crypto.randomBytes(10).toString("hex"),
      password: bcryptjs.hashSync(req.body.password, 10),
    };
    try {
      const createdUser = await User.create(user); //crea el usuari
      await accountVerificationMail(createdUser, res);
      req.body.success = true;
      req.body.sc = 201; //agrego el codigo de estado
      req.body.data = "User created!";
      await sgMail.send(message);
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  verifyCode: async (req, res, next) => {
    const { user_id, verify_code } = req.query;
    try {
      const user = await User.findById(user_id);
      if (user.verify_code === verify_code) {
        let consultas = { _id: user_id };
        let update = { is_verified: true };
        const verifiedUser = await User.findOneAndUpdate(consultas, update, {
          new: true,
        });
        req.body.success = true;
        req.body.sc = 200;
        req.body.data = "User successfully verified!!!";
        return defaultResponse(req, res);
      } else {
        req.body.success = false;
        req.body.sc = 400;
        req.body.data = "Failed to verify user!!!";
        return defaultResponse(req, res);
      }
    } catch (error) {
      next(error);
    }
  },

  signin: async (req, res, next) => {
    let { password } = req.body;
    let { user } = req;
    try {
      const verified = bcryptjs.compareSync(password, user.password);
      if (verified) {
        await User.findOneAndUpdate(
          { mail: user.mail },
          { is_online: true },
          { new: true }
        );
        let token = jwt.sign({ id: user.id }, process.env.KEY_JWT, {
          expiresIn: 60 * 60 * 24,
        });

        user = {
          mail: user.mail,
          photo: user.photo,
        };
        req.body.success = true;
        req.body.sc = 200;
        req.body.data = { user, token };
        return defaultResponse(req, res);
      }
      req.body.success = false;
      req.body.sc = 400;
      req.body.data = "invalid credentials";
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  signintoken: async (req, res, next) => {
    let { user } = req;
    try {
      req.body.success = true;
      req.body.sc = 200;
      req.body.data = { user };
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  signout: async (req, res, next) => {
    const { mail } = req.user;
    try {
      await User.findOneAndUpdate(
        { mail },
        { is_online: false },
        { new: true }
      );
      req.body.success = true;
      req.body.sc = 200;
      req.body.data = "come back soon!";
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  read: async (req, res, next) => {
    try {
      let all = await User.find();
      if (all) {
        req.body.success = true;
        req.body.sc = 200;
        req.body.data = { all };
        return defaultResponse(req, res);
      } else {
        req.body.success = false;
        req.body.sc = 404;
        req.body.data = "no users yet";
        return defaultResponse(req, res);
      }
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
