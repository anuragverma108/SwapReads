import fs from 'fs';
import path from 'path';

var directoryPath = './';
function scanJsFiles(dir) {
    var requiredFiles = {};
    fs.readdirSync(dir, { withFileTypes: true }).forEach(function (file) {
        var fullPath = path.join(dir, file.name);
        if (file.isDirectory() && file.name != 'node_modules' && file.name != 'dist') {
            requiredFiles = { ...requiredFiles, ...scanJsFiles(fullPath) };
        }
        else if (file.isFile() && file.name != 'webpack.config.js' && file.name != 'gulpfile.js') {
            if ((path.extname(file.name) === '.js')) {
                requiredFiles[fullPath.split(".")[0]] = './' + fullPath;
            }
            else if (path.extname(file.name) === '.css') {
                requiredFiles["styles/" + fullPath.split(".")[0]] = './' + fullPath;
            }
        }
    });
    return requiredFiles;
}

export var requiredFilePaths = scanJsFiles(directoryPath);