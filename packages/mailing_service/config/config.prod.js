const { PORT, Q_URI } = process.env;

module.exports = {
    q: {
        uri: Q_URI || ''
    }
}
