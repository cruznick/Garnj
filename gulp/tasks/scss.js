//  This tasks will proccess scss and pipe to corresponding folders

import {src, dest} from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import log from 'fancy-log';
import {scss} from './../config';

//  Build

const SassDev = () => {
    log.info('Getting sass from:', scss.dev.src);
    log.info('Autoprefixer opts:', scss.comp);
    log.info('Output to:', scss.dev.dest);
    log.info('Also stream to:', scss.dev.stream);
    return src(scss.dev.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(sass.comp))
        .pipe(sourcemaps.write('/maps'))
        .pipe(dest(scss.dev.dest))
        .pipe(dest(scss.dev.stream));
};
SassDev.description = 'Compiles Scss files and stream to Browser-Sync';

//  Production
const SassProd = () => {
    log.info('Building for production from:', scss.prod.src);
    log.info('Options', scss.prod.opts);
    log.info('Autoprefixer opts:', scss.comp);
    log.info('Output to:', scss.prod.dest);
    return src(scss.prod.src)
        .pipe(plumber())
        .pipe(sass(scss.prod.opts).on('error', sass.logError))
        .pipe(autoprefixer(sass.comp))
        .pipe(dest(scss.prod.dest));
};
SassProd.description = 'Compiles Scss minified and with Autoprefixer for prod';


export {SassDev, SassProd};
