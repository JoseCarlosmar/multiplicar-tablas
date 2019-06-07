const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    },
}

const argv = require('yargs')
    .command('list', 'print on console of multiply table', options)
    .command('create', 'create table of multiply on file .txt', options)
    .help()
    .argv

module.exports = {
    argv
}