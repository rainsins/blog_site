// import { fontSplit } from 'cn-font-split';
const fs = require('fs'),
    path = require('path'),
    { fontSplit } = require('cn-font-split');

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function(dirent) {
        var file = dirent.name;
        var filePath = `./${path.join(currentDirPath, dirent.name)}`;
      if (dirent.isFile()) {
        callback(file, filePath, dirent);
      } else if (dirent.isDirectory()) {
        walkSync(file, filePath, callback);
      }
    });
  }
walkSync('./src/font/', function (file, filePath, stat) {
      
    const dir_name = file.split(".");

    fontSplit({
        FontPath: filePath,
        destFold: `./src/build/${dir_name[0]}`,
        chunkSize: 60 * 1024, 
        testHTML: true, 
        reporter: true,
        targetType: 'woff2',
        previewImage: {}, 
        css:{},
        renameOutputFont: '[hash:10][ext]',
    });
  });
