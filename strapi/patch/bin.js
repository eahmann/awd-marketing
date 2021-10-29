const program = require('commander');
const { copyFile } = require('./copy');

program
    .action(() => {
        copyFile();
    });

program.parse(process.argv);
