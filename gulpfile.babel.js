//  Imports all tasks

import {task, parallel, series, watch} from 'gulp';
import * as Cfg from './gulp/config.js';
import * as CpJobs from './gulp/tasks/copy.js';
import * as JsT from './gulp/tasks/javascript.js';
import * as JklT from './gulp/tasks/jekyll.js';
import * as MinT from './gulp/tasks/optimize.js';
import * as SassT from './gulp/tasks/scss.js';
import * as Utils from './gulp/tasks/utils.js';
import browserSync from 'browser-sync';
import libs from './gulp/libs.js';

const Bs = browserSync.create();

//  BrowserSync tasks
const BsNotify = (done) => {
    Bs.notify('Stream inserted'),
    done();
};
const BsReload = (done) => {
    Bs.notify('Building'),
    Bs.reload();
    done();
};

const BSync = () => {
    Bs.init(Cfg.BSnc);
};
BSync.description = 'Creates server at http://127.0.0.1.xip.io:9999';


//  Watch task and BrowserSync reload and stream
const WatchF = () => {
    watch(Cfg.WatchFiles.Jkl, (series(JklT.Jdev, BsReload)));
    watch(Cfg.WatchFiles.Imgs, (series(CpJobs.CopyImg, JklT.Jdev, BsReload)));
    watch(Cfg.WatchFiles.Js.Jkl, (series(JsT.JklScripts, JklT.Jdev, BsReload)));
    watch(Cfg.WatchFiles.Js.CJs, (JsT.JsScripts));
    watch(Cfg.WatchFiles.Js.BJs, (series(JsT.JsConcat, JklT.Jdev, BsReload)));
    watch(Cfg.WatchFiles.Scss, (series(SassT.SassDev, BsNotify)));
};
WatchF.description = 'Watch for files changes and rebuilds';


//  Setup, Dev & Production tasks
//  Setup tasks

const CheckPaths = series(Utils.PathsList,
    Utils.LibsList);
CheckPaths.description = 'Lists all Paths and Files variables';

const CopyLibs = series(CpJobs.CopyLCss,
    CpJobs.CopyLJs);
CopyLibs.description = 'Copies libs listed on ./libs to app/_assets';

const Setup = series(CopyLibs,
    CheckPaths);
Setup.description = 'Puts everything in place so "gulp" can be run';

//  Dev tasks
const Devel = series(Utils.Clean,
    CpJobs.CopyCssL, CpJobs.CopyJsL,
    SassT.SassDev, CpJobs.CopyImg,
    JsT.JsScripts, JsT.JsConcat,
    JklT.Jdev,
    parallel(BSync, WatchF)
);
Devel.description = 'This tasks builds all for development ';

const Serve = parallel(BSync,
    WatchF);
Serve.description = 'BrowserSync & Watch tasks only';

//  Production tasks

const Prod = (series(Utils.Clean,
    CpJobs.CopyCssL, CpJobs.CopyJsL,
    CpJobs.CopyImg, JsT.JsScripts,
    JsT.JsConcatP, JklT.Jprod,
    parallel(JsT.JsMini,
        SassT.SassProd, MinT.ImgMinify,
        MinT.HtmlMinify)));
Prod.description = 'This task builds and optimize everything for production';
//  Tasks
//  Copy tasks from ./gulp/tasks/Copy
task(CpJobs.CopyCssL);
task(CpJobs.CopyImg);
task(CpJobs.CopyJsL);
task(CpJobs.CopyLCss);
task(CpJobs.CopyLJs);

//  Js tasks from ./gulp/tasks/JavaScript
task(JsT.JklScripts);
task(JsT.JsMini);
task(JsT.JsConcat);
task(JsT.JsScripts);

//  Jekyll tasks from ./gulp/tasks/Jekyll
task(JklT.Jdev);
task(JklT.Jprod);

//  Optimizing tasks from ./gulp/tasks/Optimize
task(MinT.ImgMinify);
task(MinT.HtmlMinify);

//  Scss tasks from ./gulp/tasks/Scss
task(SassT.SassDev);
task(SassT.SassProd);

//  Utils tasks from ./gulp/tasks/Utils'
task(Utils.Clean);
task(Utils.PathsList);
task(Utils.LibsList);

//  Building and other tasks
task(WatchF);
task(BSync);
task('Serve', Serve);
task('Setup', Setup);
task('CheckPaths', CheckPaths);
task('CopyLibs', CopyLibs);
task('Prod', Prod);
task('default', Devel);

