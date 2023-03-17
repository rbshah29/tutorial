
const express = require('express');
const log4js = require('log4js');

const logger = log4js.getLogger('server');
const app = express();

const PORT = process.env.PORT || 3000;

const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
const JSON_LIMIT = process.env.JSON_LIMIT || '500kb';
global.collectionName = 'userDetails';

log4js.configure({
    appenders: { 'out': { type: 'stdout' },server: { type: 'multiFile', base: 'logs/', property: 'categoryName', extension: '.log', maxLogSize:52428800, backups: 3, compress: true } },
    categories: { default: { appenders: ['out','server'], level: LOG_LEVEL } }
});

app.use(express.json({
    inflate: true,
    limit: JSON_LIMIT
}));

app.use((req, res, next) => {
    logger.info(req.method, req.headers['x-forwarded-for'] || req.connection.remoteAddress, req.path);
    next();
});

app.get('/', (req, res) => {
    res.json({
        message: 'Server is up and running'
    });
});

app.get('/user-details.json', (req, res) => {
    res.json(require('schema.json'));
});

app.use('/api/user', require('./controller.js'));

app.listen(PORT, (err) => {
    if (err) {
        logger.error(err);
    } else {
        logger.info('Server started on port', PORT);
    }
});
