const { Schema, model } = require('mongoose');

const mailSchema = new Schema({
    subject: String,
    receiver: String,
    content: String
})

module.exports = model('Mail', mailSchema);
