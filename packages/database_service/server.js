const express = require('express');

const { port, mongoURI } = require('./config');

const app = express();

app.use(express.json());

require('./dbUtil')(mongoURI);
require('./routes/get')(app);
require('./routes/post')(app);

app.listen({ port }, () =>
    console.log(`Database Server started at http://localhost:${port}`)
);
