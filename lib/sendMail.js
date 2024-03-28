import nodemailer from 'nodemailer';

export const sendEmail = async (message)=>{
    try {
        var transport = nodemailer.createTransport({
            pool: true,
            service: 'hotmail',
            port: 2525,
            auth: {
              user:'helpdesk-adbbutinaca@hotmail.com',
              pass: 'Themaker',
            },
            maxConnections: 1
          });
        const mailOptions ={
            from:'helpdesk-adbbutinaca@hotmail.com',
            to:'itzshippu@gmail.com',
            subject:message.subject,
            html:message.body
        }

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;

    } catch (error) {
        console.log(error.message)
    }
}