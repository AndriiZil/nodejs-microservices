const axios = require('axios');
const { serviceDatabase: { port } } = require('../config');

const hostname = 'http://localhost';
const dataBaseURL = `${hostname}:${port}`;

const get = async path => (await axios.get(`${dataBaseURL}/${path}`)).data.payload;

const post = async (path, body) => (await axios.post(`${dataBaseURL}/${path}`, { ...body })).data.payload;

module.exports = {
    Query: {
        mails: () => get('mails'),
        mail: (_, { id }) => get(`mails/${id}`)
    },
    Mutation: {
        mail: (_, args) => post('mails', args)
    }
}