import sgMail from "@sendgrid/mail";

function accountVerificationMail(user, res) {
    const msg = {
        to: user.mail,
        from: "arielgonzalezayala@gmail.com",
        subject: "Hello",
        text: "Hello 2",
        html: `<p>Your Minga Verification Code is: ${user.verify_code}</p>`
    }
    try {
        sgMail.send(msg);
    } catch (err) {
        return res.status(err.code).send(err.message);
    }
}

export default accountVerificationMail