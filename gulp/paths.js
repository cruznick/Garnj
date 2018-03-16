//  run gulp check-paths for more info


let paths = {};

//  Directory locations.

//  The files Jekyll will handle.
paths.AppDir = '_app/';
//  The folder where all builds go (dev/prod)
paths.BuildDir = '_b/';

//  Glob patterns by file type.
paths.scssP = '**/*.scss';
paths.jsP = '**/*.js';
paths.jsminP = '**/*.min.js';
paths.cssP = '**/*.css';
paths.cssminP= '**/*.min.css';
paths.imgP = '**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';
paths.mdP = '**/*.+(md|MD|markdown|MARKDOWN)';
paths.htmlP = '**/*.html';
paths.xmlP = '**/*.xml';

//  Folder naming conventions.
paths.GassetsFolder = '_assets/';
paths.JassetsFolder = 'assets/';
paths.prodFolder = 'prod/';
paths.devFolder = 'dev/';
paths.postFolder = '_posts/';
paths.draftFolder = '_drafts/';
paths.imageFolder = 'img/';
paths.scriptFolder = 'js/';
paths.stylesFolder = 'styles/';
paths.vendorFolder = 'vendor/';
paths.libsFolder = 'libs/';

//  Assets Folders.
//  Assets main folder
paths.AppAssets = paths.AppDir + paths.GassetsFolder;
//  Assets that will handle jekyll
paths.JklAssets = paths.AppDir + paths.JassetsFolder;
//  All processable Scss goes here (vendor & custom)
paths.Styles = paths.AppAssets + paths.stylesFolder;
paths.StylesV = paths.Styles + paths.vendorFolder;
//  All processable JS goes here (vendor & custom)
paths.Js = paths.AppAssets + paths.scriptFolder;
paths.JsV = paths.Js + paths.vendorFolder;
//  All proccesable Img goes here
paths.Img = paths.AppAssets + paths.imageFolder;
//  All non proccesable libs goes here (jquery, normalize etc...)
paths.libs = paths.AppAssets + paths.libsFolder;
//  Css libs
paths.Csslibs = paths.libs + paths.stylesFolder;
//  Js libs
paths.Jslibs = paths.libs + paths.scriptFolder;

//  Assets destination Folders
//  All files will be proccessed to this locations so jekyll will
//  rebuild after any change
//  Here goes all Sass proccessed
paths.JklCss = paths.JklAssets + paths.stylesFolder;
//  Here goes all Js proccessed
paths.JklJs = paths.JklAssets + paths.scriptFolder;
//  Here goes all Img not proccessed yet as will be done for Production
paths.JklImg = paths.JklAssets + paths.imageFolder;
//  Others Assets main Folder (this will be divided by js and css)
paths.JklOthers = paths.JklAssets + paths.libsFolder;
// Js libs Folder (jquery etc...)
paths.JklJsOthers = paths.JklOthers + paths.scriptFolder;
//  Css Libs folder (normalize etc...)
paths.JklCssOthers = paths.JklOthers + paths.stylesFolder;

//  Local Build destination folders
//  Local build dir for testing and browsersync
paths.LbDir = paths.BuildDir + paths.devFolder;
//  Local build assets Dir
paths.LbDassets = paths.LbDir + paths.JassetsFolder;
//  Local build Css folder for source maps and browsersync style injection
paths.LbDCss = paths.LbDassets + paths.stylesFolder;
//  Local build Js Folder for source maps
paths.LbDJs = paths.LbDassets + paths.scriptFolder;
//  Local buiid Img folder for Jekyll
paths.LbDImg = paths.LbDassets + paths.imageFolder;

//  _assets folders and extensions
//  Images files
paths.AImgF = paths.Img + paths.imgP;
//  Scss files
paths.AStyledF = paths.Styles + paths.scssP;
paths.AStylesLF = paths.Csslibs + paths.cssP;
paths.AStylesminLF = paths.Csslibs + paths.cssminP;
//  Js files
paths.AJsF = paths.Js + paths.jsP;
paths.AJsVF = paths.JsV + paths.jsP;
paths.AJsLF = paths.Jslibs + paths.jsP;
paths.AJsminLF = paths.Jslibs + paths.jsminP;

// Production Folders
paths.PbDir = paths.BuildDir + paths.prodFolder;
paths.PbDassets = paths.PbDir + paths.JassetsFolder;
paths.PbDCss = paths.PbDassets + paths.stylesFolder;
paths.PbDJs = paths.PbDassets + paths.scriptFolder;
paths.PbDImg = paths.PbDassets + paths.imageFolder;
paths.PbDHtmlF = paths.PbDir + paths.htmlP;

//  Jekyll paths for watch task

paths.JklHtml = paths.AppDir + paths.htmlP;
paths.JklMd = paths.AppDir + paths.mdP;


export default paths;
