// Include paths.
import paths from './paths';
import libs from './libs.js';

//  Setup task config
const setup = {
    js: {
        src: libs.Jquery,
        dest: paths.Jslibs,
    },
    css: {
        src: libs.normalize,
        dest: paths.Csslibs,
    },
};

//  Copy task config
const copy = {
    img: {
        src: paths.AImgF,
        dest: paths.JklImg,
    },
    Slibs: {
        src: [
            paths.AStylesLF,
            paths.AStylesminLF,
        ],
        dest: paths.JklCssOthers,
    },
    Jslibs: {
        src: [
            paths.AJsLF,
            paths.AJsminLF,
        ],
        dest: paths.JklJsOthers,
    },
};

//  Jekyll task config
const jekyll = {
    notify: 'Rebuilding Jekyll',
    dev: {
        src: paths.AppDir,
        cfg: [
            '_config.yml',
            '_config.test.yml',
        ],
        dest: paths.LbDir,
    },
    prod: {
        src: paths.AppDir,
        cfg: '_config.yml',
        dest: paths.PbDir,
    },

};

//  Clean task config
const clean = {
    src: [
        paths.JklAssets,
        paths.LbDir,
        paths.Js + 'build.js',
        // './_app/_includes/scripts.js', // uncomment this line if needed
    ],
};

//  Sass task config
const scss = {
    notify: 'Building Scss',
    dev: {
        src: paths.Styles + 'main.scss',
        dest: paths.JklCss,
        stream: paths.LbDCss,
    },
    prod: {
        src: paths.Styles + 'main.scss',
        dest: paths.PbDCss,
        opts: {
            outputStyle: 'compressed',
        },
    },
    comp: [
        'last 2 versions',
        'ie >= 9',
    ],

};

//  Config for Js tasks, here you
//  should put external js to be compiled or concat
const JsCfg = {
    fname: 'all.js',
    src: paths.Js + 'app.js',
    Nname: 'build.js',
    dest: paths.Js,
    opts: {
        mangle: false,
    },
    Jkl: {
        src: './_app/_includes/_scripts.js',
        dest: './_app/_includes/',
        Nname: 'scripts.js',
    },
    concat: {
        src: [
            paths.AJsVF,
            paths.Js + 'build.js',
        ],
        dest: paths.JklJs,
    },
    prod: {
        src: paths.JklJs + 'all.js',
        dest: paths.PbDJs,
    },
};

//  This task optimize imgs
const ImgMin = {
    src: paths.AImgF,
    dest: paths.PbDImg,
};

//  This tasks minify html and inlineJs
const Html = {
    src: paths.PbDHtmlF,
    dest: paths.PbDir,
    opts: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        caseSensitive: true,
    },
};

//  Wath files
const WatchFiles = {
    Jkl: [
        './../_config.test.yml',
        './../_config.yml',
        paths.JklHtml,
        paths.JklMd,
    ],
    Imgs: [
        paths.AImgF,
    ],
    Js: {
        Jkl: './_app/_includes/_scripts.js',
        CJs: paths.Js + 'app.js',
        BJs: [
            paths.Js + 'build.js',
            paths.AJsVF,
        ],
    },
    Scss: [
        paths.AStyledF,
    ],
};
//  Browser-Sync
const BSnc = {
    notify: true,
    open: true,
    port: 9999,
    files: paths.JklCss,
    server: {
        baseDir: paths.LbDir,
    },
    xip: true,
};
export {
    setup,
    copy,
    jekyll,
    clean,
    scss,
    JsCfg,
    ImgMin,
    Html,
    WatchFiles,
    BSnc,
};

