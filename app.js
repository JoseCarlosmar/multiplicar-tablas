const { createFile, list } = require('./multiply/multiply') //Destructuración
const arvg = require('./config/yargs').argv
const colors = require('colors/safe')


let command = argv._[0]
switch (command) {
    case 'list':
        list(argv.base, argv.limit)

        break;
    case 'create':
        createFile(argv.base, argv.limit)
            .then((file) => {
                console.log(`File created: ${colors.green(file)}`);
            })
            .catch((err) => {
                console.log(err);
            })
        break;

    default:
        console.log('Unrecognized Command');
        break;
}