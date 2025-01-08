const fs = require("fs");
const os = require('os');
const xml2js = require('xml2js');

fs.readFile("../../_site/sitemap.xml", "utf-8", (err, data) => {
    if (err) throw err;
    // console.log(data);
    xml2js.parseString(data, (err, result) => {
        if (err) throw err;
        
        result.urlset.url.forEach((e, i) => {
            fs.appendFileSync("../../_site/sitemap.txt", `${e.loc}${os.EOL}`,'utf8');
        });
    });
});
