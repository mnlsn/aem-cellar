import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import {execFile, exec} from 'child_process';

const baseDir = path.join(__dirname, '../..');
const Progress = require('node-progress').get();
const wait = new Progress();

export function push(options = {host: 'localhost', port: '4502', user: 'admin', pass: 'admin', 'dest': '/'}) {
    const env = `http://${options.host}:${options.port}/crx`;
    const localPath = path.join(process.cwd(), options.source);
    const sitePath = path.join('/', options.dest);

    console.log(chalk.cyan(`Uploading content from ${localPath} to ${sitePath}`));
    console.log(chalk.red('This may take a bit of time...'));
    wait.start();

    exec(`find ${localPath} -type f | grep .DS_Store | xargs rm`, (err, stdout, stderr) => {
        execFile(path.join(baseDir, 'bin/vlt'), [
            '-v',
            '--credentials',
            `${options.user}:${options.pass}`,
            'import',
            env,
            localPath,
            sitePath
        ], (err, stdout, stderr) => {
            if (err) {
                throw err;
            }
            wait.finish();
            console.log(stdout);
            console.log(chalk.cyan(`Finished uploading content from ${localPath} to ${sitePath}`));
        });
    });
}
