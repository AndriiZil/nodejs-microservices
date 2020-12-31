const amqp = require('amqplib/callback_api');
const { q: { uri } } = require('./config');

const q = 'test_q';

amqp.connect(uri, (err, conn) => {
    if (err) throw new Error(err);

    conn.createChannel((err, ch) => {
        if (err) throw new Error(err);

        ch.assertQueue(q, { durable: true });

        ch.consume(q, msg => {
            console.log('I Got a message', msg.content.toString());
        }, { noAck: true }); // delete message after getting
    });

    setTimeout(() => {
        conn.close()
        process.exit(0)
    }, 1000)
});