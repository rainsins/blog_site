const links_data = [
  {
    name: "Rainsin（test）",
    url: "https://blog.rainsin.cn",
    img: "",
    dec: "如人饮水，冷暖自知。",
    emil: "mail@rainsin.cn",
    index: 1,
  },
  {
    name: "半截の诗",
    url: "https://sweetjing.cc/",
    img: "https://q1.qlogo.cn/g?b=qq&nk=1486823198&s=640",
    dec: "保持热爱，奔赴山海。",
    emil: "",
    index: -1,
  },
  {
    name: "半日闲",
    url: "https://xiaoa.me",
    img: "https://xiaoa.me/logo.png",
    dec: "偷得浮生半日闲",
    emil: "",
    index: -1
  },
  {
    name: "Cream薄荷糖",
    url: "https://creammint.cn/",
    img: "https://cdn.creammint.cn/basicdata_img/avatar.webp",
    dec: "尚未佩剑，转眼遍是江湖，喜欢的人太美，想买的东西太贵~",
    emil: "",
    index: -1
  },
];

const dcolor = ["#f7dfe5", "#c2cfd0", "#eadfb5", "#dae9ef", "#d6d4e2", "#bcbea9", "#697291", "#a5898c", "#aec2c8", "#e9d0b1", "#8890a4", "#d1c0c6"];

function LinksItem({ data, mode }) {

  React.useEffect(() => {
    $(".links-item-box").hover((e) => {
      anime({
        targets: e.currentTarget.firstChild.firstChild,
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
  }, []);

  const item = data.map((e, i) => {

    const imgobj = {
      backgroundImage: `url(${e.img ? e.img : e.emil ? `https://cravatar.cn/avatar/${MD5.generate(e.emil)}` : "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/mm/act.gif"})`
    };

    const get_imgurl = (index1) => {
      return index1 >= 9 ? sessionStorage.getItem("isOut") == "false" ? `https://pan.rainsin.cn:2000/d/blog/img/post/%E5%8D%81%E4%BA%8C%E6%A2%A6_%E4%BA%AE%E7%82%B9%E6%BC%AB%E7%94%BB-%E7%AB%99%E9%85%B7ZCOOL/100${i + 1}.jpg` : `https://mypan.hk.cpolar.io/d/blog/img/post/%E5%8D%81%E4%BA%8C%E6%A2%A6_%E4%BA%AE%E7%82%B9%E6%BC%AB%E7%94%BB-%E7%AB%99%E9%85%B7ZCOOL/100${i + 1}.jpg` : sessionStorage.getItem("isOut") == "false" ? `https://pan.rainsin.cn:2000/d/blog/img/post/%E5%8D%81%E4%BA%8C%E6%A2%A6_%E4%BA%AE%E7%82%B9%E6%BC%AB%E7%94%BB-%E7%AB%99%E9%85%B7ZCOOL/1000${i + 1}.jpg` : `https://mypan.hk.cpolar.io/d/blog/img/post/%E5%8D%81%E4%BA%8C%E6%A2%A6_%E4%BA%AE%E7%82%B9%E6%BC%AB%E7%94%BB-%E7%AB%99%E9%85%B7ZCOOL/1000${i + 1}.jpg`;
    }

    const get_darkimgurl = (index1) => {
      return sessionStorage.getItem("isOut") == "false" ? `https://pan.rainsin.cn:2000/d/blog/img/post/%E5%8D%81%E4%BA%8C%E8%8A%B1%E7%A5%9E/${i + 1}.png` : `https://mypan.hk.cpolar.io/d/blog/img/post/%E5%8D%81%E4%BA%8C%E8%8A%B1%E7%A5%9E/${i + 1}.png`;
    }

    const get_lighturl = () => {
      return `url(${e.index >= 0 ? get_imgurl(e.index) : get_imgurl(i - Math.floor(i % 12) * 12)})`;
    }

    const get_darkurl = () => {
      return `url(${e.index >= 0 ? get_darkimgurl(e.index) : get_darkimgurl(i - Math.floor(i % 12) * 12)})`;
    }

    const imgbg = {
      backgroundColor: `${mode == 'light' ? "#fff" : dcolor[i]}`,
      backgroundImage: `${mode == 'light' ? get_lighturl() : get_darkurl()}`
    }
    return (
      <a className="links-item-box" href={e.url} target="_blank" style={imgbg}>
        <div className="links-item-img-box">
          <div className="links-item-img" style={imgobj}></div>
        </div>
        <div className="links-item-info-box">
          <span className="links-item-info-name">{e.name}</span>
          <span className="links-item-info-url">{e.url}</span>
          {e.dec ? <span className="links-item-info-dec">
            {e.dec}
          </span> : null}
        </div>
      </a>
    );
  });
  return (
    <div className="links-box">
      {item}
    </div>
  );
};

const links_item = ReactDOM.createRoot(document.getElementById('links-box'));

links_item.render(<LinksItem data={links_data} mode={modeToggle.modeStatus} />);

const targetNode_link = document.documentElement;

// 观察器的配置（需要观察什么变动）
const config_link = { attributes: true, characterData: false };

// 当观察到变动时执行的回调函数
const callback_link = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "data-mode") {

      if (modeToggle.modeStatus === 'dark') {
        links_item.render(<LinksItem data={links_data} mode={'dark'} />);
      }
      else {
        links_item.render(<LinksItem data={links_data} mode={"light"} />);
      }
    }
  }
};

// 创建一个观察器实例并传入回调函数
const obs = new MutationObserver(callback_link);

// 以上述配置开始观察目标节点
obs.observe(targetNode_link, config_link);
