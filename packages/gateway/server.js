const express = require('express');

const { port } = require('./config');
const server = require('./data/schema');

const app = express();

app.use(express.json());

server.applyMiddleware({ app });

app.listen({ port }, () =>
    console.log(`API Gateway started at http://localhost:${port}${server.graphqlPath} `)
);

// NodeJSMicroserviceQ
