import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

export function clean(folder, cb) {
    fs.remove(path.join(process.cwd(), folder), function (err) {
        if (err) {
            throw err;
        }

        console.log(chalk.cyan.bold(`${folder} has been cleared and deleted`));

        if (cb && typeof cb === 'function') {
            cb(err, stdout, stderr);
        }
    });
}
