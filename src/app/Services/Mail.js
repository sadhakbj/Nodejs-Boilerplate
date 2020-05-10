import NodeMailer from 'nodemailer'
import emailConfig from '../../config/mail'

class EmailSender {
    transport

    constructor() {
        this.transport = NodeMailer.createTransport({
            host: emailConfig.MAIL_HOST,
            port: emailConfig.MAIL_PORT,
            auth: {
                user: emailConfig.MAIL_USERNAME,
                pass: emailConfig.MAIL_PASSWORD,
            },
        })
    }

    async sendMessage(to, subject, text, html) {
        let mailOptions = {
            from: emailConfig.MAIL_FROM_ADDRESS,
            to,
            subject,
            text,
            html,
        }

        await this.transport.sendMail(mailOptions)
    }
}

export default new EmailSender()
