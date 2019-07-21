var winston = require('winston');
var logger = winston.createLogger({
    transports: [
        new (winston.transports.Console),
        new (winston.transports.File)({filename: 'var/log/logF.log'})
    ]
});

module.exports = logger;