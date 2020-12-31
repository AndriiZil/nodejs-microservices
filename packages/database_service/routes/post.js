const Mail = require('../dbUtil/models/Mail');

const mailHandler = async (req, res, next) => {
    try {
        const { subject, receiver, content } = req.body;

        if (!subject || !receiver || !content) {
            // TODO refactore to Decorator
            return res.status(422).send({
                message: 'You forgot some important key',
                service: 'Database Service',
                status: 422,
                payload: null
            });
        }

        const mail = await Mail.create({ subject, receiver, content });

        return res.status(201).send({
            message: 'Mail was created',
            service: 'Database Service',
            status: 201,
            payload: mail
        });
    } catch (err) {
        next(err);
    }
}

module.exports = server => {
    server
        .post('/mails', mailHandler)
};
