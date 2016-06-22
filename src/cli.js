const program = require('commander');
import {pull, clean, push} from './task/vault';

program.usage('[command] [options]');

program.command('pull')
    .description('Pulls files down from AEM to filesystem')
    .option('-s, --source <source>', 'Source Directory on AEM Instance, Ex: "content/example/site/"')
    .option('-d, --dest <dest>', 'Destination Directory ')
    .option('-n, --host [host]', 'Host Name', 'localhost')
    .option('-p, --port [port]', 'Port', '4502')
    .option('-u, --user [user]', 'User Name', 'admin')
    .option('-w, --pass [pass]', 'Password', 'admin')
    .action(pull);

program.command('push')
    .description('Upload files from local filesystem to AEM')
    .option('-s, --source <source>', 'Source Directory on Local Filesystem')
    .option('-d, --dest <dest>', 'Destination Directory on AEM, usually just / ', '/')
    .option('-n, --host [host]', 'Host Name', 'localhost')
    .option('-p, --port [port]', 'Port', '4502')
    .option('-u, --user [user]', 'User Name', 'admin')
    .option('-w, --pass [pass]', 'Password', 'admin')
    .action(push);

program.command('clean <dir>')
    .description('Clears Filesystem Folder From Previous Pull')
    .action(clean);

program.parse(process.argv);

module.exports = program;
