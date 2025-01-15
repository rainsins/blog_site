const threeav = [
    {
        name: "明日叶みつは",
        age: "2000.01.30.",
        three: "B87 / W58 / H88",
        out: "2023.07.11.",
        color: "#5248b5",
        color1: "#6E4A35",
        color2: "#CB926E",
        color3: "#D2B39C",
        color4: "#90552C",
        img: "https://file.rainsin.cn/d/blog/img/comment/%E6%98%8E%E5%A4%B4.jpg",
        bgimg: "https://file.rainsin.cn/d/blog/img/comment/%E6%98%8E%E6%97%A5%E5%8F%B6.webp",
        mfact: "S1",
        mfactlogo: "https://file.rainsin.cn/d/blog/img/comment/s1.webp",
        url: "https://twitter.com/ashitaba_taba"
    },
    {
        name: "山岸あやか",
        age: "1992.11.30.",
        three: "B82 / W59 / H81",
        out: "2017.07.",
        color: "#1f7b8f",
        color1: "#86706F",
        color2: "#D6D7DA",
        color3: "#C2BBBC",
        color4: "#9BA5A4",
        img: "https://file.rainsin.cn/d/blog/img/comment/%E5%B1%B1%E5%A4%B4.webp",
        bgimg: "https://file.rainsin.cn/d/blog/img/comment/%E5%B1%B1.webp",
        mfact: "PREMIUM",
        mfactlogo: "https://file.rainsin.cn/d/blog/img/comment/pe.png",
        url: "https://xslist.org/zh/model/358.html"
    },
    {
        name: "小野夕子",
        age: "1993.12.02.",
        three: "B92 / W58 / H88",
        out: "2014.08.",
        color: "#e1b5a0",
        color1: "#a96d56",
        color2: "#2092C5",
        color3: "#a27a6c",
        color4: "#431b10",
        img: "https://file.rainsin.cn/d/blog/img/comment/%E5%A5%B6%E8%91%B5%E5%A4%B4.webp",
        bgimg: "https://file.rainsin.cn/d/blog/img/comment/%E5%A5%B6%E8%91%B5.webp",
        mfact: "DAHLIA",
        mfactlogo: "https://file.rainsin.cn/d/blog/img/comment/toplogo.png",
        url: "https://xslist.org/en/model/66603.html"
    },
    {
        name: "神木丽",
        age: "1999.12.20.",
        three: "B95 / W60 / H85",
        out: "2022.06.",
        color: "#734b3a",
        color1: "#96908c",
        color2: "#d0ae96",
        color3: "#c19e8d",
        color4: "#352824",
        img: "https://file.rainsin.cn/d/blog/img/comment/%E4%B8%BD%E5%A4%B4.webp",
        bgimg: "https://file.rainsin.cn/d/blog/img/comment/%E4%B8%BD.jpg",
        mfact: "SOD",
        mfactlogo: "https://file.rainsin.cn/d/blog/img/comment/SOD.webp",
        url: "https://xslist.org/zh/model/159548.html"
    },
    {
        name: "太阳しずく",
        age: "2000.05.09.",
        three: "B88 / W54 / H87",
        out: "2021.08.",
        color: "#e9652e",
        color1: "#DAC9BF",
        color2: "#DFB095",
        color3: "#B49179",
        color4: "#AD6F4B",
        img: "https://file.rainsin.cn/d/blog/img/comment/mi%E5%A4%B4.jpg",
        bgimg: "https://file.rainsin.cn/d/blog/img/comment/mi.webp",
        mfact: "SOD",
        mfactlogo: "https://file.rainsin.cn/d/blog/img/comment/SOD.webp",
        url: "https://xslist.org/zh/model/134598.html"
    },
    {
        name: "坂道みる",
        age: "1999.11.28.",
        three: "B82 / W54 / H84",
        out: "2021.06",
        color: "#cc7a23",
        color1: "#838386",
        color2: "#E6CECA",
        color3: "#C6BCB7",
        color4: "#838386",
        img: "https://file.rainsin.cn/d/blog/img/comment/%E6%B0%B4%E5%A8%83%E5%A4%B4.jpg",
        bgimg: "https://file.rainsin.cn/d/blog/img/comment/%E6%B0%B4%E5%A8%83.webp",
        mfact: "S1",
        mfactlogo: "https://file.rainsin.cn/d/blog/img/comment/s1.webp",
        url: "https://xslist.org/zh/model/25134.html"
    },
];
function Three() {
    const aitem = threeav.map(i => {
        return (
            <AvItem avs={i} />
        );
    });
    return (
        <div class="three-av">
            {aitem}
        </div>
    );
};

function AvItem({ avs }) {
    const st = {
        backgroundImage: `url(${avs.bgimg})`
    };
    const nameimg = {
        backgroundImage: `url(${avs.img})`
    };
    const maskstyle = {
        backgroundImage: `linear-gradient(to bottom, ${avs.color1}  0%, ${avs.color2} 35%, ${avs.color3} 75%, ${avs.color4} 100%)`
    };
    const titlecolor = {
        color: avs.color
    };
    const mfact_logo = {
        backgroundImage: `url(${avs.mfactlogo})`
    };
    return (
        <div className="av-item-box" style={st}>
            <div className="av-mask" style={maskstyle}></div>

            <div className="av-title">
                <div className="av-title-name" style={titlecolor}>
                    {avs.name}
                </div>
                <div className="av-title-img">
                    <div className="av-title-img-main" style={nameimg} data-url={avs.url}></div>
                </div>
            </div>
            <div className="av-detial">
                <Deitem left={'生日'} right={avs.age} color={titlecolor} />
                <Deitem left={'三围'} right={avs.three} color={titlecolor} />
                <Deitem left={'出道'} right={avs.out} color={titlecolor} />
                <Deitem left={'厂商'} right={avs.mfact} color={titlecolor} />
            </div>
            <div className="av-mfact-logo" id={avs.name} style={mfact_logo}></div>
        </div>
    );
};

function Deitem({ left, right, color }) {

    return (
        <div className="av-detial-item">
            <div className="av-detial-item-main" style={color}>
                {left}
            </div>
            <div className="av-detial-item-content">
                {right}
            </div>
        </div>
    );
};

function Av(){

  React.useEffect(()=>{
    $(".av-title-img-main").hover((e) => {
      anime({
        targets: e.target,
        keyframes: [
          { rotate: "18deg", },
          { rotate: "-18deg" },
          { rotate: "10deg" },
          { rotate: "-8deg" },
          { rotate: "5deg" },
          { rotate: "-1deg" },
          { rotate: 0 },
        ],
        easing: 'easeInOutSine'
      });
    }, (e) => {
    });

    $(".av-title-img-main").click((e) => {
      window.open($(e.target).data("url"), "_blank");
    });
  },[]);

        return (<div className="container-av">
            <Three />
        </div>);
};

const av_boxs = ReactDOM.createRoot(document.getElementById('av-box'));
av_boxs.render(<Av />);
