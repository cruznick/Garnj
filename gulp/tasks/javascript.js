//  This tasks will proccess all js and pipe to corresponding folders
import {src, dest} from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import log from 'fancy-log';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import {JsCfg} from './../config';

//  This task will convert Jekyll script include
//  that is only in use if you need to pass tags
//  to js

const JklScripts = () => {
    log.info('Transpiling with babel:', JsCfg.Jkl.src);
    log.info('Output:', JsCfg.Jkl.dest);
    return src(JsCfg.Jkl.src)
        .pipe(babel())
        .pipe(rename(JsCfg.Jkl.Nname))
        .pipe(dest(JsCfg.Jkl.dest));
};
JklScripts.description = 'This tasks only handles _includes/_scripts.js';

//  This task will transpile custom js from
//  _app/assets/js and output to _app/assets/js
//  also will bundle vendor js firsts

const JsScripts = () => {
    log.info('Transpiling with babel:', JsCfg.src);
    log.info('Output:', JsCfg.dest);
    return src(JsCfg.src)
        .pipe(plumber())
        .pipe(babel())
        .pipe(rename(JsCfg.Nname))
        .pipe(dest(JsCfg.dest));
};

JsScripts.description = 'This will transpile custom Js';

//  This tasks takes all js files concat them and outputs to
//  assets for jekyll build procces

const JsConcat = () => {
    log.info('Concat:', (JsCfg.concat.src));
    log.info('To:', (JsCfg.concat.dest));
    return src(JsCfg.concat.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat(JsCfg.fname))
        .pipe(sourcemaps.write('/maps'))
        .pipe(dest(JsCfg.concat.dest));
};
JsConcat.description = 'Concats and creates all.js in assets for Jekyll';

const JsConcatP = () => {
    log.info('Concat:', (JsCfg.concat.src));
    log.info('To:', (JsCfg.concat.dest));
    return src(JsCfg.concat.src)
        .pipe(plumber())
        .pipe(concat(JsCfg.fname))
        .pipe(dest(JsCfg.concat.dest));
};
JsConcat.description = 'Concats and creates all.js in assets for Jekyll';

const JsMini = () => {
    log.info('Minifying:', JsCfg.prod.src);
    log.info('To:', JsCfg.prod.dest);
    return src(JsCfg.prod.src)
        .pipe(uglify(JsCfg.opts))
        .pipe(dest(JsCfg.prod.dest));
};
JsMini.description = 'This task minifies for production';


//  Exporting tasks
export {JsMini, JsConcat, JklScripts, JsScripts, JsConcatP};
