const log4js = require('log4js')

log4js.configure({
    appenders: {
        dateFile: {
            type: 'dateFile',
            filename: 'src/logs/poven.log',
            pattern: 'yyyy-MM-dd-hh',
            compress: true,
        },
        out: {
            type: 'stdout',
        },
    },
    categories: {
        default: { appenders: ['dateFile', 'out'], level: 'trace' },
    },
})

const logger = log4js.getLogger('poven')

export default logger
