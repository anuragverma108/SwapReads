import gulpClean from 'gulp-clean';
import GulpClient from 'gulp';

const { src, dest, watch, task, series } = GulpClient;

function cleanUnwantedJsFiles() {
    return src('dist/styles/**/*.js', { read: false, allowEmpty: true })
        .pipe(gulpClean());
}

task('default', series(cleanUnwantedJsFiles));