// This tasks will handle jekyll builds for devel and for production
import spawn from 'cross-spawn';
import {jekyll} from './../config';
import log from 'fancy-log';

//  This task buils Jekyll site from _app to _b/dev for
//  development

const Jdev = () => {
    log.info('Building Jekyll for local testing');
    return spawn('bundle', ['exec',
        'jekyll',
        'build',
        '-V',
        '--source=' + jekyll.dev.src,
        '--destination=' + jekyll.dev.dest,
        '--config=' + jekyll.dev.cfg],
    {stdio: 'inherit'});
};
Jdev.description = 'Generates Jekyll buid from _app/* to _b/dev';

//  This tasks builds Jekyll to _b/prod production ready

const Jprod = () => {
    log.info('Building Jekyll production ready!!!');
    return spawn('bundle', ['exec',
        'jekyll',
        'build',
        '-V',
        '--source=' + jekyll.prod.src,
        '--destination=' + jekyll.prod.dest,
        '--config=' + jekyll.prod.cfg],
    {stdio: 'inherit'});
};
Jprod.description = 'Builds Jekyll to _b/prod production ready';


export {Jdev, Jprod};
