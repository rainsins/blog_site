const fs = require("fs");
const links_data = require("./linksdata.js");
const os = require('os');
const xml2js = require('xml2js');

fs.readFile("../../sitemap.xml", "utf-8", (err, data) => {
    if (err) throw err;
    // console.log(data);
    xml2js.parseString(data, (err, result) => {
        if (err) throw err;

        links_data.forEach((e, i) => {
            if (i != 0) {
                const post_data = {
                    loc:`${e.url}`,
                    priority: "1.0"
                };
    
                result.urlset.url.push(post_data);
                fs.appendFileSync("../../sitemap.txt", `${e.url}${os.EOL}`,'utf8');
            }
        });

        const builder = new xml2js.Builder();
        const xml = builder.buildObject(result);

        fs.writeFile('../../sitemap.xml', xml, (err) => {
            if (err) throw err;

            console.log(`Updated XML is written to a new file.`);
        });
    });
});
