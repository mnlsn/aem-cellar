import * as vault from './task/vault';

function pull({host = 'localhost', port = '4502', user = 'admin', pass = 'admin', source = undefined, dest = undefined}) {
    if (!source || !dest) {
        throw new Error('Please specify source and/or dest');
    }

    return new Promise((resolve, reject) => {
        vault.pull({
            host,
            port,
            user,
            pass,
            dest,
            source
        }, (err, stdout, stderr) => {
            if (err) {
                reject(err, stdout, stderr);
            }

            resolve(stdout);
        });
    });
}

function push({host = 'localhost', port = '4502', user = 'admin', pass = 'admin', dest = '/', source = undefined}) {
    if (!source) {
        throw new Error('Please specify source');
    }

    return new Promise((resolve, reject) => {
        vault.push({
            host,
            port,
            user,
            pass,
            dest,
            source
        }, (err, stdout, stderr) => {
            if (err) {
                reject(err, stdout, stderr);
            }

            resolve(stdout);
        });
    });
}

function clean(path) {
    if (!path) {
        throw new Error('Please specify path to clean');
    }
    return new Promise((resolve, reject) => {
        vault.clean(path, (err, stdout, stderr) => {
            if (err) {
                reject(err, stdout, stderr);
            }

            resolve(stdout);
        });
    });
}

export {
    pull,
    push,
    clean
}
