const {SENDGRID_API_KEY} = process.env

import sgMail from "@sendgrid/mail"

sgMail.setApiKey(SENDGRID_API_KEY)

export default sgMail