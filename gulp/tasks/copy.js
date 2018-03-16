//  This task copy all files to be handle by Jekyll to
//  app/assets folder this is done in dev just to preview
//  on production all files will be handled by Jekyll

import {src, dest} from 'gulp';
import {setup, copy} from './../config';
import log from 'fancy-log';
//  This task copies images from _app/_assets/img
//  to _app/assets/img

const CopyImg = () => {
    log.info('Copied: ', copy.img.src);
    log.info('To: ', copy.img.dest);
    return src(copy.img.src)
        .pipe(dest(copy.img.dest));
};
CopyImg.description = 'Copies Img files from _app/_assets/* to _app/assets/*';

//  This task copies Css libs from _app/_assets/libs/styles
//  to _app/assets/libs/styles

const CopyCssL = () => {
    log.info('Copied: ', copy.Slibs.src);
    log.info('To: ', copy.Slibs.dest);
    return src(copy.Slibs.src)
        .pipe(dest(copy.Slibs.dest));
};
CopyCssL.description = 'Copies Css libs from _app/_assets/* to _app/assets/*';

//  This task copies images from _app/_assets/libs/js
//  to _app/assets/libs/js

const CopyJsL = () => {
    log.info('Copied: ', copy.Jslibs.src);
    log.info('To: ', copy.Jslibs.dest);
    return src(copy.Jslibs.src)
        .pipe(dest(copy.Jslibs.dest));
};
CopyJsL.description = 'Copies Js libs from _app/_assets/* to _app/assets/*';

//  This task copies libs to app/_assets folder
//  This is done post install so this files
//  will be handle by another task in the build proccess

const CopyLCss = () => {
    log.info('Copied: ', setup.css.src);
    log.info('To: ', setup.css.dest);
    return src(setup.css.src)
        .pipe(dest(setup.css.dest));
};
CopyLCss.description = 'Copies Css libs from node_modules/* to _app/_assets/*';

const CopyLJs = () => {
    log.info('Copied: ', setup.js.src);
    log.info('To: ', setup.js.dest);
    return src(setup.js.src)
        .pipe(dest(setup.js.dest));
};
CopyLJs.description = 'Copies Js libs from node_modules/* to _app/_assets/*';

//  Tasks

export {CopyLCss, CopyLJs, CopyJsL, CopyCssL, CopyImg};
