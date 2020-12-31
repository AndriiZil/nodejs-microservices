const { mailjet: { apiPublic, apiSecret } } = require('../config');
const mailjet = require ('node-mailjet').connect(apiPublic, apiSecret);

module.exports = async mail => {
    const request = await mailjet
        .post('send', { 'version': 'v3.1' })
        .request({
            "Messages":[
                {
                    "From": {
                        "Email": "andrii.zilnyk@gmail.com",
                        "Name": "Andrii"
                    },
                    "To": [
                        {
                            "Email": mail.receiver,
                            "Name": "Tony Jones"
                        }
                    ],
                    "Subject": mail.subject,
                    "TextPart": mail.content,
                    "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                    "CustomID": "AppGettingStartedTest"
                }
            ]
        });

    console.log(request.body);
}
