import sgMail from "@sendgrid/mail";

function accountVerificationMail(req, res) {
    const msg = {
        to: req.body.mail,
        from: "arielgonzalezayala@gmail.com",
        subject: "Hello",
        text: "Hello 2",
        html: `<p>Your Minga Verification Code is: ${req.body.verify_code}</p>`
    }
    try {
        sgMail.send(msg);
    } catch (err) {
        return res.status(err.code).send(err.message);
    }
}

export default accountVerificationMail