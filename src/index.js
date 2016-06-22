import * as vault from './task/vault';

function pull(options = {host: 'localhost', port: '4502', user: 'admin', pass: 'admin'}) {
    if (!options.source || !options.dest) {
        throw new Error('Please specify source');
    }
    vault.pull(options);
}

function push(options = {host: 'localhost', port: '4502', user: 'admin', pass: 'admin', 'dest': '/'}) {
    if (!options.source) {
        throw new Error('Please specify source');
    }
    vault.push(options);
}

function clean(path) {
    if (!path) {
        throw new Error('Please specify path to clean');
    }
    vault.clean(path);
}

export {
    pull,
    push,
    clean
}
