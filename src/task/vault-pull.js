import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import {execFile as exec} from 'child_process';

const baseDir = path.join(__dirname, '../..');
const Progress = require('node-progress').get();
const wait = new Progress();

export function pull(options, cb) {
    const env = `http://${options.host}:${options.port}/crx`;
    const destination = path.join(process.cwd(), options.dest);
    const sitePath = path.join('/', options.source);

    console.log(chalk.cyan(`Pulling content from ${sitePath} down to ${destination}`));
    console.log(chalk.red('This may take a bit of time...'));
    wait.start();

    exec(path.join(baseDir, 'bin/vlt'), [
        '-v',
        '--credentials',
        `${options.user}:${options.pass}`,
        'export',
        env,
        sitePath,
        destination
    ], (err, stdout, stderr) => {
        if (err) {
            throw err;
        }

        wait.finish();
        console.log(stdout);
        console.log(chalk.cyan(`Finished pulling content from ${sitePath} to ${destination}`));

        if (cb && typeof cb === 'function') {
            cb(err, stdout, stderr);
        }
    });
}
