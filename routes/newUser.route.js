/* import express from "express"
import sgMail from "../services/sendgrid.js"

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const router = express.Router()

router.post("/", async (req, res) => {
    const {to, from, subject, text, html} = req.body;
    const msg = {
        to,
        from,
        subject,
        text,
        html
    }
    try {
        await sgMail.send(msg);
    } catch (err) {
        return res.status(err.code).send(err.message)
    }
/*     res.send(201).send({success: true}) */
/* })

export default router */ 