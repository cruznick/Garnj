//  Tthis tasks will only be called on production build
//  as they will only minify html , inline js and optimize images

import {src, dest} from 'gulp';
import plumber from 'gulp-plumber';
import htmlmin from 'gulp-htmlmin';
import minifyInline from 'gulp-minify-inline';
import imagemin from 'gulp-imagemin';
import {ImgMin, Html} from './../config';
import log from 'fancy-log';

//  This task will pass all img with imagemin

const ImgMinify = (cb) => {
    log.info('Optimizing Imgs from: ', (ImgMin.src));
    log.info('Output Folder: ', (ImgMin.dest));
    src(ImgMin.src)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(dest(ImgMin.dest));
    cb();
};
ImgMinify.description = 'Passes all img by imagemin';

//  This task will minify all html & inline Js
const HtmlMinify = (cb) => {
    log.info('Optimizing Html from:', (Html.src));
    log.info('Output Folder:', (Html.dest));
    src(Html.src)
        .pipe(plumber())
        .pipe(htmlmin(Html.opts))
        .pipe(minifyInline())
        .pipe(dest(Html.dest));
    cb();
};
HtmlMinify.description = 'This task will minify Html';

//  Exporting tasks
export {ImgMinify, HtmlMinify};
