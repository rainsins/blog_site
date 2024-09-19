let website_datas = new Map();
website_datas.set("学术",[
    {
        name:"安娜的档案馆",
        url:"https://zh.annas-archive.org/",
        imgurl:"a",
        detail: "人类历史上最大的完全开放的图书馆。",
        gfw: true
    },
    {
        name:"Z-library",
        url:"https://zh.singlelogin.rs",
        imgurl:"z",
        detail: "一个影子图书馆和开放获取文件分享计划。",
        gfw: false
    },
    {
        name:"书格",
        url:"https://www.shuge.org/",
        imgurl:"s",
        detail: "书格是一个自由开放的在线古籍图书馆。",
        gfw: false
    },
    {
        name:"Library Genesis+",
        url:"https://libgen.li/",
        imgurl:"l",
        detail: "一个电子书搜索引擎。",
        gfw: true
    },
    {
        name:"BookYards",
        url:"https://www.bookyards.com/en/welcome",
        imgurl:"b",
        detail: "教辅资源下载。",
        gfw: true
    },
    {
        name:"搬书匠",
        url:"http://www.banshujiang.cn/",
        imgurl:"b",
        detail: "主要为编程书籍资源。",
        gfw: false
    }
]);

website_datas.set("数学工具及博客",[
    {
        name:"陶哲轩博客",
        url:"https://terrytao.wordpress.com/",
        imgurl:"t",
        detail: "很硬核。",
        gfw: true
    },
    {
        name:"desmos's blog",
        url:"https://www.desmos.com/?lang=zh-CN",
        imgurl:"d",
        detail: "desmos的官方博客，有很多示例。",
        gfw: true
    },
    {
        name:"desmos",
        url:"https://www.desmos.com/calculator?lang=zh-CN",
        imgurl:"d",
        detail: "2d函数图像绘制。",
        gfw: false
    },
    {
        name:"geogebra",
        url:"https://www.geogebra.org/graphing?lang=zh_CN",
        imgurl:"g",
        detail: "2d函数图像绘制。",
        gfw: false
    },
    {
        name:"manim",
        url:"https://github.com/ManimCommunity/manim",
        imgurl:"m",
        detail: "绘制数学动画的python框架。",
        gfw: true
    },
    {
        name:"symbolab",
        url:"https://zs.symbolab.com/solver/indefinite-integral-calculator",
        imgurl:"s",
        detail: "可以解定积分，极限，级数，统计等等问题的网站。",
        gfw: false
    },
    {
        name:"mafs",
        url:"https://mafs.dev/guides/display/points",
        imgurl:"m",
        detail: "绘制函数图像的React库，很好用。",
        gfw: true
    },
    {
        name:"math",
        url:"https://webdemo.myscript.com/views/math/index.html#",
        imgurl:"m",
        detail: "识别手写的公式，转换为latex格式或MathML格式。",
        gfw: false
    },
    {
        name:"3blue1brown",
        url:"https://www.3blue1brown.com/",
        imgurl:"t",
        detail: "一个个人比较喜欢数学博主。",
        gfw: false
    },
]);

website_datas.set("AI资源",[
    {
        name:"Next-Chat",
        url:"https://chat.rainsin.cn",
        imgurl:"c",
        detail: "我的Chat应用",
        gfw: false
    },
    {
        name:"gptgod",
        url:"https://gptgod.online/#/register?invite_code=d60hbroczlfoiiwqo6pjgp8n1",
        imgurl:"g",
        detail: "各种模型都有（有免费的积分）",
        gfw: false
    },
    {
        name:"chathub",
        url:"https://chathub.gg/?utm_source=github",
        imgurl:"c",
        detail: "各种模型都有（付费）",
        gfw: false
    },
    
    {
        name:"chatall",
        url:"http://chatall.ai/",
        imgurl:"c",
        detail: "各种模型都有(付费)",
        gfw: false
    },
])

website_datas.set("Mac软件",[
    {
        name:"xclient",
        url:"https://xclient.info/",
        imgurl:"x",
        detail: "软件挺全，但是大多是城通网盘。",
        gfw: false
    },
    {
        name:"马可波罗",
        url:"https://www.macbl.com/",
        imgurl:"m",
        detail: "同xclient。",
        gfw: false
    },
    {
        name:"史蒂芬周的博客",
        url:"https://www.sdifen.com/",
        imgurl:"s",
        detail: "blog形式的软件站。",
        gfw: false
    },
    {
        name:"国光的黑苹果安装教程",
        url:"https://apple.sqlsec.com/",
        imgurl:"g",
        detail: "黑苹果教程。",
        gfw: false
    },
    {
        name:"黑果小兵的部落阁",
        url:"https://blog.daliansky.net/",
        imgurl:"h",
        detail: "黑苹果教程。",
        gfw: false
    },
]);

website_datas.set("Win软件",[
    {
        name:"殁漂遥",
        url:"https://www.mpyit.com/",
        imgurl:"z",
        detail: "软件挺全乎。",
        gfw: false
    },
    {
        name:"我告诉你（旧）",
        url:"https://msdn.itellyou.cn/",
        imgurl:"m",
        detail: "微软官网，windows镜像下载。",
        gfw: false
    },
    {
        name:"我告诉你（新）",
        url:"https://next.itellyou.cn/",
        imgurl:"m",
        detail: "微软官网，windows镜像下载。",
        gfw: false
    },

]);

website_datas.set("老司机工具",[
    {
        name:"xslist",
        url:"https://xslist.org/",
        imgurl:"x",
        detail: "AI识别女优图像",
        gfw: true
    },
    {
        name:"JAVmenu",
        url:"https://javmenu.com/",
        imgurl:"j",
        detail: "JAV的数据库",
        gfw: true
    },
    {
        name:"javDB（海外）",
        url:"https://javdb.com/",
        imgurl:"j",
        detail: "JAV的数据库",
        gfw: true
    },
    {
        name:"javDB（国内）",
        url:"https://javdb524.com",
        imgurl:"j",
        detail: "JAV的数据库",
        gfw: false
    },
    {
        name:"JAVlibrary",
        url:"https://www.javlibrary.com/cn/",
        imgurl:"j",
        detail: "JAV的数据库",
        gfw: true
    },
    {
        name:"Porndude",
        url:"https://theporndude.com/zh",
        imgurl:"p",
        detail: "宅男导航",
        gfw: true
    },
    {
        name:"搜番",
        url:"https://dk.sefan.cc/",
        imgurl:"s",
        detail: "磁力搜索",
        gfw: true
    },
    {
        name:"qBittorrent增强版",
        url:"https://github.com/c0re100/qBittorrent-Enhanced-Edition",
        imgurl:"q",
        detail: "磁力下载工具",
        gfw: false
    },
]);

function Instrdetail({arr}){

    const item = arr.map((e,index)=>{
        const sty_bg = {
            backgroundImage: `url(https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/website/letter/letter-${e.imgurl}.webp)`
        };
        const gfw = (g) => {
            if(g){
                return(
                    <svg t="1704776148557" className="website-item-gfw" title="可能需要梯子" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10941" width=".8rem" height=".8rem"><path d="M721.21344 51.2c14.36672 0 26.80832 10.00448 29.93152 24.064l190.7712 860.16A30.72 30.72 0 0 1 911.9744 972.8H627.32288a30.6688 30.6688 0 0 1-29.92128-24.064l-190.7712-860.16A30.72 30.72 0 0 1 436.56192 51.2H721.2032z m112.80384 688.66048H614.4l37.74464 172.17536h219.60704l-37.7344-172.17536z m-48.83456-222.80192H565.56544l35.51232 162.03776h219.61728l-35.51232-162.03776z m-44.40064-202.5472H521.17504l31.0784 141.78304h219.60704l-31.0784-141.78304z m-44.3904-202.5472H476.78464l31.0784 141.78304h219.5968l-31.06816-141.78304z" fill="#050505" p-id="10942"></path><path d="M131.7888 946.23744a30.38208 30.38208 0 0 1-59.76064-10.8544l0.31744-1.76128 175.48288-826.88a60.76416 60.76416 0 0 1 56.99584-48.09728l2.4576-0.0512h45.19936a30.38208 30.38208 0 0 1 1.78176 60.71296l-1.78176 0.0512h-45.2096L278.75328 253.7472h111.93344a30.38208 30.38208 0 0 1 0 60.76416H265.85088L235.76576 456.2944h194.048a30.38208 30.38208 0 1 1 0 60.7744l-206.94016-0.01024-34.39616 162.03776h207.88224l25.14944-108.1344a30.38208 30.38208 0 0 1 59.5456 12.00128l-0.3584 1.75104-84.18304 362.09664a30.38208 30.38208 0 0 1-59.5456-12.01152l0.3584-1.7408 44.91264-193.19808H175.58528L131.7888 946.23744z" fill="#050505" p-id="10943"></path></svg>
                );
            }else{
                return(
                    <svg t="1704776244228" className="website-item-gfw" title="不需要梯子" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14149" width=".8rem" height=".8rem"><path d="M128 128a42.666667 42.666667 0 0 1 42.666667-42.666667h640a42.666667 42.666667 0 0 1 42.666666 42.666667v234.666667a42.666667 42.666667 0 0 1-42.666666 42.666666H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666666V128z m85.333333 42.666667v149.333333h554.666667V170.666667H213.333333z" fill="#000000" p-id="14150"></path><path d="M128 362.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h640a42.666667 42.666667 0 0 1 42.666666 42.666667v234.666666a42.666667 42.666667 0 0 1-42.666666 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V362.666667z m85.333333 42.666666v149.333334h554.666667v-149.333334H213.333333z" fill="#000000" p-id="14151"></path><path d="M128 597.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h640a42.666667 42.666667 0 0 1 42.666666 42.666666v234.666667a42.666667 42.666667 0 0 1-42.666666 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V597.333333z m85.333333 42.666667v149.333333h554.666667v-149.333333H213.333333z" fill="#000000" p-id="14152"></path><path d="M917.333333 704c0 117.824-95.509333 213.333333-213.333333 213.333333s-213.333333-95.509333-213.333333-213.333333 95.509333-213.333333 213.333333-213.333333 213.333333 95.509333 213.333333 213.333333z" fill="#FFFFFF" p-id="14153"></path><path d="M704 533.333333a170.666667 170.666667 0 1 0 0 341.333334 170.666667 170.666667 0 0 0 0-341.333334z m-256 170.666667c0-141.376 114.624-256 256-256s256 114.624 256 256-114.624 256-256 256-256-114.624-256-256z" fill="#000000" p-id="14154"></path><path d="M839.530667 655.338667l-113.642667 138.88a42.666667 42.666667 0 0 1-63.210667 3.157333l-78.293333-78.293333 60.352-60.330667 44.949333 44.949333 83.797334-102.4 66.048 54.037334z" fill="#0078FF" p-id="14155"></path></svg>
                );
            }
        };

        const c_change = (event) => {
            window.open(e.url,"_blank");
        };

        return(
            <div className="website-item-box" key={index} onClick={c_change} title={e.gfw ? "需要自备梯子" : "国内访问良好"}>
                <div className="website-item-img-box" style={sty_bg}>
                    <div className="website-item-img" style={sty_bg}></div>
                </div>
                <div className="website-item-info">
                    <div className="website-item-name">{e.name}</div>
                    <div className="website-item-detail">{e.detail}</div>
                    {gfw(e.gfw)}
                </div>
            </div>
        );
    });
    return(
        <div className="website-detail-box">
            {item}
        </div>
    );
};


function Instr(){

    const [siteData,setSiteData] = React.useState(website_datas.get("学术"));
    const [boxState,setBoxState] = React.useState("学术");
    const set_detail = (str,e) => {
        setBoxState(str);
        setSiteData(website_datas.get(str));
    };

    const gen_option = () => {
        let arr = [];
        let i = 0;
        website_datas.forEach((value,key)=>{
            arr.push(key);
        });
        return arr.map((e,index)=>{
            return (
                <div className="instr-option" data-indtr={e} key={index} onClick={(s)=>set_detail(e,s)}>
                    {e}
                </div>
            )
        })
    };

    React.useEffect(()=>{
        const instr_box = document.getElementsByClassName("instr-option");
        if(instr_box){
            for(let item of instr_box){
                if(item.dataset.indtr == boxState){
                    item.className = "instr-option show-option";
                }else{
                    item.className = "instr-option";
                }
            }
        }
    },[boxState]);

    return(
        <div className="instr-item-box">
            <div className="instr-option-box">
                {gen_option()}
            </div>
            <Instrdetail arr={siteData}></Instrdetail>
        </div>
    );
};

const instr_boxs = ReactDOM.createRoot(document.getElementById('instr-box'));
instr_boxs.render(<Instr/>);