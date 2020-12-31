const mongoose = require('mongoose');

module.exports = async (mongoURI) => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`[${new Date().toISOString()}] Mongoose connected`);
    } catch (err) {
        console.log(err);
    }
}
