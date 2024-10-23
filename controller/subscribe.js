import nodemailer from 'nodemailer';
export function sendEmail(name, email, callback) {
  
    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS  
        }
    });


    let mailOptions = {
        from: 'SWAP READS',        
        to: email,                           
        subject: 'Newsletter Subscription SWAP_READS',  
        text: `Hello ${name},\n\nThank you for subscribing to our newsletter!`, 
        html: `<h3>Hello ${name},</h3><p>Thank you for subscribing to our newsletter!</p>` 
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return callback(error);
        }
        console.log('Email sent: ' + info.response);
        callback(null, info);
    });
}
