const { log } = require('console');
const COS = require('cos-nodejs-sdk-v5');
const Fontmin = require('fontmin');
const fs = require("fs");
const path = require('path');
const ttf2woff2 = require('ttf2woff2');
const config = require("./config.json");

function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
      fs.readdirSync(folderPath).forEach((file, index) => {
        const curPath = path.join(folderPath, file);
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteFolderRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(folderPath);
    }
}
// 创建实例
const cos = new COS({
    SecretId: config.SecretId,
    SecretKey: config.SecretKey,
});
  
// 存储桶名称，由bucketname-appid 组成，appid必须填入，可以在COS控制台查看存储桶名称。 https://console.cloud.tencent.com/cos5/bucket
let Bucket = config.Bucket;
// 存储桶Region可以在COS控制台指定存储桶的概览页查看 https://console.cloud.tencent.com/cos5/bucket/
// 关于地域的详情见 https://cloud.tencent.com/document/product/436/6224
let Region = config.Region;

let content = '';

//
function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function(dirent) {
      var filePath = path.join(currentDirPath, dirent.name);
      if (dirent.isFile()) {
        callback(filePath, dirent);
      } else if (dirent.isDirectory()) {
        walkSync(filePath, callback);
      }
    });
  }

let deleteFiles = function (marker) {
    cos.getBucket({
        Bucket: Bucket, /* 填入您自己的存储桶，必须字段 */
        Region: Region,  /* 存储桶所在地域，例如ap-beijing，必须字段 */
        Prefix: 'rainsin-blog/fonts/site_use/',
        MaxKeys: 1000,
    }, function (listError, listResult) {
        if (listError) return console.log('list error:', listError);
        var nextMarker = listResult.NextMarker;
        var objects = listResult.Contents.map(function (item) {
            return { Key: item.Key }
        });
        cos.deleteMultipleObject({
            Bucket: Bucket,
            Region: Region,
            Objects: objects,
        }, function (delError, deleteResult) {
            if (delError) {
                console.log('delete error', delError);
                console.log('delete stop');
            } else {
                console.log('delete result', deleteResult);
                if (listResult.IsTruncated === 'true') deleteFiles(nextMarker);
                else console.log('delete complete');
            }
        });
    });
};


deleteFiles();

fs.readFile('./updatefont/font.txt',function(err,data){
    if(err){
        console.log(err)
    }
    content = data.toString();
    console.log(content);
    deleteFolderRecursive("./main_font/");
    const fontmin = new Fontmin()
        .src('./font/*.TTF')
        .use(Fontmin.glyph({
            text: content
        }))
        .dest('./main_font');
        fontmin.run(function (err, files) {
            if (err) {
                throw err;
            }

            deleteFolderRecursive("./out_font/");
            fs.mkdirSync("./out_font");
            
            const timestamp = new Date().getTime();

            const time = Math.floor(timestamp / 1000);

            fs.writeFileSync('./assets/css/font.css', "", { flag: 'w+' });
        
            walkSync('./main_font', function(filePath, stat) {
                const maps = {
                    L: 100,
                    R: 200,
                    M: 300,
                    D: 400,
                    B: 500,
                    E: 600
                }


                for (const key in maps) {
                    if (filePath.indexOf(`${key}.TTF`) != -1) {
                        let input = fs.readFileSync(`./${filePath}`);

                        fs.writeFileSync(`./out_font/${maps[key]}-${time}.woff2`, ttf2woff2(input));

                        cos.uploadFile(
                            {
                              Bucket: Bucket,
                              Region: Region,
                              Key: `/rainsin-blog/fonts/site_use/${maps[key]}-${time}.woff2`,
                              FilePath: `./out_font/${maps[key]}-${time}.woff2`, // 本地文件地址，需自行替换
                              SliceSize: 1024 * 1024 * 5, // 触发分块上传的阈值，超过5MB使用分块上传，非必须
                            },
                            function (err, data) {
                              console.log(err, data);
                            }
                        );

                        let texts = `@font-face {font-family: "筑紫A"; src:url("https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/fonts/site_use/${maps[key]}-${time}.woff2") format('woff2'); font-weight: ${maps[key]};} `

                        fs.writeFileSync('./assets/css/font.css', texts, { flag: 'a+' });
                    }
                }
            })
        });
        
})
