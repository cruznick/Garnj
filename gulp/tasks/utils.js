//  Here will be tasks that are helpful for the environment
import del from 'del';
import paths from './../paths';
import libs from './../libs';
import log from 'fancy-log';
import {clean} from './../config';


//  This task will list all the paths used and where they point

const PathsList = (done) => {
    log.info(paths);
    done();
};
PathsList.description = 'List all the paths used and where they point';

//  List all libs and respective paths in gulp/libs folder

const LibsList = (done) => {
    log.info(libs);
    done();
};
LibsList.description = 'List all libs and respective paths in gulp/libs folder';

//   This task cleans before building

const Clean = (done) => {
    del(clean.src);
    log.info('Cleaning up', clean.src);
    done();
};
Clean.description = 'Cleans up _app/assets & _b/dev folders';

//  Exports all

export {PathsList, LibsList, Clean};
