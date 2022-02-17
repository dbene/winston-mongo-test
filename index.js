const winston = require('winston');
require('winston-mongodb');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console({ level: 'verbose' }),
        new winston.transports.MongoDB({
            level: 'info',
            db: 'mongodb://db:27017/logs',
            collection: 'logs',
            tryReconnect: true,
            leaveConnectionOpen: false,
            options: {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            },
        }),
    ],
});

logger.info('Hello World!')