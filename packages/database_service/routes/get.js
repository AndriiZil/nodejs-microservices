const Mail = require('../dbUtil/models/Mail');

const pingHandler = (req, res) => {
    return res.send('Healthy');
}

const mailHandler = async (req, res) => {
    let mails;
    let error;
    let status;

    try {
        mails = await Mail.find();
    } catch (err) {
        error = err;
        status = err.code || err.status
    }

    // TODO remove to decorator
    return res.send({
        status,
        message: 'Get response from DB',
        service: 'Database Service',
        payload: mails || error
    });
}

const singleMailHandler = async (req, res ) => {
    const { id: _id } = req.params;

    let mail;
    let error;
    let status;

    try {
        mail = await Mail.findOne({ _id });
    } catch (err) {
        error = err;
        status = err.code || err.status
    }

    // TODO remove to decorator
    return res.send({
        status,
        message: 'Get response from DB',
        service: 'Database Service',
        payload: mail || error
    });
}

module.exports = server => {
    server
        .get('/', pingHandler)
        .get('/mails', mailHandler)
        .get('/mails/:id', singleMailHandler)
};
