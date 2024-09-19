function ppll() {
    let ob = {
        type: 4,
    };
    for (let i = 1; i < 23;i++){
        const str = i > 9 ? `PPLL${i}` : `PPLL0${i}`;
        ob[str] = {
            img: `https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/cube/4/ppll/svgexport-${i + 5}.svg`,
            data: [
                {
                    name: str,
                    alg:""
                },
                {
                    name: str,
                    alg:""
                },
                {
                    name: str,
                    alg:""
                },
                {
                    name: str,
                    alg:""
                },
            ]
        }
    }
    return ob;
}

const fs = require('fs');

const ppllString = JSON.stringify(ppll());

fs.writeFile('./ppll.json', ppllString, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Data written to file');
    }
  });


