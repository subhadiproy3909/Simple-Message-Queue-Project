const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.SENDER_EMAIL,
        pass: process.env.MAIL_PASSWORD,
    } 
});

const sendMail = async function ({ email, subject, html }) {

    try {
        const info = await transporter.sendMail({
            from: '"ABC enterprise for mail verification" <foo@example.com>', // sender address
            to: email, // list of receivers
            subject: subject,
            html: html, // html body
            // text: text, // plain text body
        });

        console.log("Message sent: %s", info.messageId);

        return info;
    } catch (error) {
        throw new Error(`mail sending error: ${error.message}`);
    }
}


module.exports = sendMail;