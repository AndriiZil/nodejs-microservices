const { PORT } = process.env;

module.exports = {
    port: PORT || 4000,
    mongoURI: 'mongodb+srv://userAndrii:KLJEASvSfPAzdiII@cluster0.zxmde.mongodb.net/microservice?retryWrites=true&w=majority'
}
