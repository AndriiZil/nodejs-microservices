const path = require('path');

const basePath = path.join(__dirname, '/packages');

module.exports = {
    apps: [
        {
            name: 'Gateway',
            script: `${basePath}/gateway/server.js`,
            watch: true,
            env: {
                PORT: 3001,
                SERVICE_DB_PORT: 4001,
                Q_URI: '***'
            },
            instance: 'max',
            exec_mode: 'cluster'
        },
        {
            name: 'DB Service',
            script: `${basePath}/database_service/server.js`,
            watch: true,
            env: {
                PORT: 4001,
                MONGO_URI: '***'
            }
        },
        {
            name: 'Mailing Service',
            script: `${basePath}/mailing_service/index.js`,
            watch: true,
            env: {
                MJ_API_PUBLIC: '***',
                MJ_API_SECRET: '***',
                Q_URI: '***'
            }
        },
    ],
};
