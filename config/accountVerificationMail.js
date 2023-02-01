import sgMail from "@sendgrid/mail";

function accountVerificationMail(user, res) {
    const message = {
        to: user.mail,
        from: "arielgonzalezayala@gmail.com",
        subject: "Confirm your email address",
        text: "Please click the confirmation link",
        html: `<p>Welcome to Minga, the best comic book page in the entire known universe! Click here to confirm your email address and be a part of our community of comic and manga curators, the best in the world: <a href="http://localhost:3000/verify/${user._id}/${user.verify_code}">Click Here To Verify</a></p>`,
      };
    try {
        sgMail.send(message);
    } catch (err) {
        return res.status(err.code).send(err.message);
    }
}

export default accountVerificationMail