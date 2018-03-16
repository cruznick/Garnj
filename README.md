[![Build Status](https://travis-ci.org/cruznick/Garnj.svg?branch=master)](https://travis-ci.org/cruznick/Garnj)


# Garnj
<!-- TOC -->

- [Garnj](#garnj)
    - [Folder structure:](#folder-structure)
    - [Installation](#installation)
    - [Current tasks](#current-tasks)

<!-- /TOC -->

This package is based on [Gulp 4](https://github.com/gulpjs/gulp/tree/4.0), it uses [Yarn](https://yarnpkg.com/lang/en/) and [Jekyll](https://jekyllrb.com) for creating statics sites in an easy and expandable way, you can easly add another framework or library to the workflow

Every task and file is commented and I tried to be as explicit as I could when creating the comments but if you have any questions pleas open an [Issue](https://github.com/cruznick/Garnj/issues) and I will try to get at you Asap.

## Folder structure:

```
Garnj/
|   .babelrc
|   .eslintrc.js
|   .gitignore
|   .travis.yml
|   Gemfile
|   Gemfile.lock
|   gulpfile.babel.js
|   LICENSE
|   package.json
|   Rakefile.rb
|   README.md
|   test.txt
|   yarn-error.log
|   yarn.lock
|   _config.test.yml
|   _config.yml
|
+---gulp/
|   |   config.js
|   |   libs.js
|   |   paths.js
|   |
|   \---tasks/
|           copy.js
|           JavaScript.js
|           Jekyll.js
|           Optimize.js
|           Scss.js
|           utils.js
|
+---_app/
|   |   index.html
|   |
|   +---_assets/
|   |   +---img/
|   |   |       octocat-de-los-muertos.jpg
|   |   |
|   |   +---js/
|   |   |   |   app.js
|   |   |   |
|   |   |   \---vendor/
|   |   |
|   |   +---libs/
|   |   |   +---js/
|   |   |   |       jquery.min.js
|   |   |   |
|   |   |   \---styles/
|   |   |           normalize.css
|   |   |
|   |   \---styles/
|   |       |   main.scss
|   |       |
|   |       \---scss/
|   |           |   _html5bp.scss
|   |           |
|   |           \---vendor/
|   |
|   +---_drafts/
|   |
|   +---_includes/
|   |       footer.html
|   |       header.html
|   |       script.js
|   |
|   +---_layouts/
|   |       main.html
|   |
|   \---_posts/
|
\---
```
## Installation

This depends on:
- [Gulp 4.0.0](https://github.com/gulpjs/gulp/tree/4.0) ([Install instructions](https://github.com/gulpjs/gulp/tree/4.0))
- [Yarn](https://yarnpkg.com/lang/en/) ([Install instructions](https://yarnpkg.com/lang/en/docs/install/))
- [Jekyll](https://jekyllrb.com)
- [Ruby](https://www.ruby-lang.org/en/) (install depens on your SO)

You only need to preinstall Yarn, Ruby and for Gulp  use this:

```sh
$ yarn global add gulp-cli
```
After dependencies are installed run:

```
$ gulp
```

And you can start editing files inside the `_app` folder.

## Current tasks

This is the list of tasks and descriptions:

```bash
$ gulp -T
```
```
 Requiring external module babel-register
 Tasks for ~\Garnj\gulpfile.babel.js

 ├── CopyCssL    Copies Css libs from _app/_assets/* to _app/assets/*
 ├── CopyImg     Copies Img files from _app/_assets/* to _app/assets/*
 ├── CopyJsL     Copies Js libs from _app/_assets/* to _app/assets/*
 ├── CopyLCss    Copies Css libs from node_modules/* to _app/_assets/*
 ├── CopyLJs     Copies Js libs from node_modules/* to _app/_assets/*
 ├── JklScripts  This tasks only handles _includes/_scripts.js
 ├── JsMini      This task minifies for production
 ├── JsConcat    Concats and creates all.js in assets for Jekyll
 ├── JsScripts   This will transpile custom Js
 ├── Jdev        Generates Jekyll buid from _app/* to _b/dev
 ├── Jprod       Builds Jekyll to _b/prod production ready
 ├── ImgMinify   Passes all img by imagemin
 ├── HtmlMinify  This task will minify Html
 ├── SassDev     Compiles Scss files and stream to Browser-Sync
 ├── SassProd    Compiles Scss minified and with Autoprefixer for prod
 ├── Clean       Cleans up _app/assets & _b/dev folders
 ├── PathsList   List all the paths used and where they point
 ├── LibsList    List all libs and respective paths in gulp/libs folder
 ├── WatchF      Watch for files changes and rebuilds
 ├── BSync       Creates server at http://127.0.0.1.xip.io:9999
 ├─┬ Serve       BrowserSync & Watch tasks only
 │ └─┬ <parallel>
 │   ├── BSync
 │   └── WatchF
 ├─┬ Setup       Puts everything in place so "gulp" can be run
 │ └─┬ <series>
 │   ├─┬ <series>
 │   │ ├── CopyLCss
 │   │ └── CopyLJs
 │   └─┬ <series>
 │     ├── PathsList
 │     └── LibsList
 ├─┬ CheckPaths  Lists all Paths and Files variables
 │ └─┬ <series>
 │   ├── PathsList
 │   └── LibsList
 ├─┬ CopyLibs    Copies libs listed on ./libs to app/_assets
 │ └─┬ <series>
 │   ├── CopyLCss
 │   └── CopyLJs
 ├─┬ Prod        This task builds and optimize everything for production
 │ └─┬ <series>
 │   ├── Clean
 │   ├── CopyCssL
 │   ├── CopyJsL
 │   ├── CopyImg
 │   ├── JsScripts
 │   ├── JsConcatP
 │   ├── Jprod
 │   └─┬ <parallel>
 │     ├── JsMini
 │     ├── SassProd
 │     ├── ImgMinify
 │     └── HtmlMinify
 └─┬ default     This tasks builds all for development
   └─┬ <series>
     ├── Clean
     ├── CopyCssL
     ├── CopyJsL
     ├── SassDev
     ├── CopyImg
     ├── JsScripts
     ├── JsConcat
     ├── Jdev
     └─┬ <parallel>
       ├── BSync
       └── WatchF
```

Every task can be called by itself and should work without any issues

