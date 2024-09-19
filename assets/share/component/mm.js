function MmerItem({ arts }) {
    const get_title = (index_title) => {
        let title = "";
        if (!arts.pagefonts) {
            return arts.name;
        }
        arts.pagefonts.forEach((element, index) => {
            if (element.length == 2) {
                if (index_title == element[1]) {
                    title = element[0];
                }
            } else {
                if (index_title >= element[1] && index_title <= element[2]) {
                    title = element[0];
                }
            }
        });
        return title;
    };

    const get_url = (index_title) => {
        return index_title >= 100 ? `https://obj.rainsin.cn:2000/mmm/${arts.path}/IMG_00${index_title}.webp` : index_title >= 10 ? `https://obj.rainsin.cn:2000/mmm/${arts.path}/IMG_000${index_title}.webp` : `https://obj.rainsin.cn:2000/mmm/${arts.path}/IMG_0000${index_title}.webp`;
    };
    
    const [count,setCount] = React.useState(1);
    const [title,setTitle] = React.useState(get_title(1));
    const [url,setUrl] = React.useState(get_url(1));

    const set_bar_select = (r) =>{
        if(count == r + 1){
            return "swiper-bar swiper-bar-selected";
        }else{
            return "swiper-bar";
        }
    };

    React.useEffect(()=>{
        const load = document.getElementById("swiper-img-loading-mm");
        load.style.display = "block";
        const imgs = document.getElementById("swiper-img-id");
        imgs.onload = ()=>{
            load.style.display = "none";
        }
    },[url]);

    function update(index){
        setCount(index);
        setTitle(get_title(index));
        setUrl(get_url(index));
    }

    function set_count(index,event){
        const i = index + 1;
        update(i);
    };

    const gen_bar = () => {
        let cs = new Array(arts.page).fill('');
        return cs.map((e,index)=>{
            return (
                <div className={set_bar_select(index)} id={`${arts.name}${index + 1}`} data-id={index + 1} onClick={(e) => set_count(index,e)} ></div>
            );
        });
    };

    const bar_boxl={
        width: `${(2*arts.page + 1)*0.6}rem`
    };

    function addcount(){
        let tem = count + 1;
        if(tem >= arts.page){
            update(1);
        }else{
            update(tem);
        }   
    };

    function decount(){
        let tem = count - 1;
        if(tem <= 0){
            update(arts.page);
        }else{
            update(tem);
        }   
    };

    return (
        <div className="swiper-container">
            <div className="swiper-img-loading-mm" id="swiper-img-loading-mm" >
                <img src="https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/mm/porn.gif"></img>
                <div className="swiper-img-loading-text">
                    图片加载中。。。
                </div>
            </div>
            <div className="swiper-img-box">
                    <div className="swiper-img-title">
                        {title}
                    </div>
                    <img className="swiper-img" loading="lazy" id="swiper-img-id" src={url}/>
            </div>
            <div className="swiper-bar-box" style={bar_boxl}>
                {gen_bar()}
            </div>
            <div className="swiper-perv-box" onClick={decount}>
                <div></div>
            </div>
            <div className="swiper-next-box" onClick={addcount}>
                <div></div>
            </div>
        </div>
    );
};

//path用来生成图片信息
//图片的名字是有序的，以开始。
const mm_item = [
    {
        name: "杂志",
        path: "niannian-zazhi",
        author: "年年",
        home: 3,
        page: 26,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "月刊少女",
        path: "niannian-yuekanshaonv",
        author: "年年",
        home: 3,
        page: 36,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "七月",
        path: "niannian-qiyue",
        author: "年年",
        home: 3,
        page: 40,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "沐秋",
        path: "niannian-muqiu",
        author: "年年",
        home: 3,
        page: 44,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "喵系少女",
        path: "niannian-miaoxishaonv",
        author: "年年",
        home: 3,
        page: 34,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "网络女孩",
        path: "niannian-cybergirl",
        author: "年年",
        home: 3,
        page: 44,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "吊带",
        path: "niannian-diaodai",
        author: "年年",
        home: 3,
        page: 45,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "美人淋浴",
        path: "dounianglishi-meirenmuyu",
        author: "利世",
        home: 3,
        page: 74,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "白露",
        path: "niannian-bailu",
        author: "年年",
        home: 2,
        page: 43,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "纯欲女友",
        path: "niannian-chunyunvyou",
        author: "年年",
        home: 1,
        page: 39,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "枫洄",
        path: "niannian-fenghui",
        author: "年年",
        home: 2,
        page: 55,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "落日蔷薇",
        path: "niannian-luoriqiangwei",
        author: "年年",
        home: 1,
        page: 30,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "么么茶",
        path: "niannian-momocha",
        author: "年年",
        home: 1,
        page: 44,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "年年有余",
        path: "niannian-niannianyouyu",
        author: "年年",
        home: 1,
        page: 39,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "青丝",
        path: "niannian-qingsi",
        author: "年年",
        home: 1,
        page: 20,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "如梦令",
        path: "niannian-rumengling",
        author: "年年",
        home: 1,
        page: 40,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "晨跑",
        path: "taoliang-chengpao",
        author: "桃凉",
        home: 3,
        page: 44,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "皮衣修女",
        path: "suijingningning-piyixiunv",
        author: "桜井宁宁",
        home: 1,
        page: 60,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "职业装秘书",
        path: "Tina-mishu",
        author: "Tina很妖孽呀",
        home: 1,
        page: 46,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "画中仙",
        path: "TITI-huazhongxian",
        author: "钛合金TiTi",
        home: 9,
        page: 55,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "黑丝西装",
        path: "xulan-heisinvzhuang",
        author: "许岚LAN",
        home: 2,
        page: 40,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "yuka",
        path: "yuka",
        author: "yuka",
        home: 8,
        page: 89,
        color: "#f8df724c",
        pagefonts: ""
    },
    {
        name: "白桃汽水",
        path: "baitaoqishui",
        author: "白桃汽水",
        home: 1,
        page: 57,
        color: "#69a8944c",
        pagefonts: ""
    },
    {
        name: "花间集",
        path: "baojishaonv-huajianji",
        author: "爆机少女喵小吉",
        home: 2,
        page: 83,
        color: "#ee48634c",
        pagefonts: ""
    },
    {
        name: "薄荷微光",
        path: "boheweiguang",
        author: "薄荷微光",
        home: 1,
        page: 58,
        color: "#813c854c",
        pagefonts: ""
    }
];

//传递作品信息
const mmContext = React.createContext(null);

//方便是否生成作品页面
function Merr() {
    const art = React.useContext(mmContext);

    return (art ? <MmerItem arts={art} /> : "");
};

function Mer() {
    //生成作品列表
    const title_arts = mm_item.map((el, i) => {
        const sty = {
            backgroundImage: `url(https://obj.rainsin.cn:2000/mmm/${el.path}/1.webp)`
        };
        return (
            <div className="mm-item" onClick={(e) => setArthandle(el, e)} key={i} style={sty} title="点击查看详情">
                <div className="mm-mask"></div>
                <div className="mm-name">
                    {el.name}
                </div>
            </div>);
    });

    //查看作品
    const setArthandle = (el, e) => {
        setArtContent(el);
        setIsShow(true);
        // document.body.classList.add('bd-clean');
        // document.documentElement.style.width = "100%";
        // document.documentElement.style.height = "100%";
    };
    //作品的详细信息
    const [artContent, setArtContent] = React.useState(null);
    //是否展示作品
    const [isShow, setIsShow] = React.useState(false);

    // 查看作品关闭
    const setShow = () => {
        setIsShow(false);
        // document.body.classList.remove('bd-clean');
        // document.documentElement.style.width = "";
        // document.documentElement.style.height = "";
    };

    return (
        <mmContext.Provider value={artContent}>
            <div className="art-title-box">
                {title_arts}
            </div>
            {isShow ? (
                <div className="swiper-box">
                    <div className="swiper-if-button" onClick={setShow}></div>
                    <Merr />
                </div>) : ""}
        </mmContext.Provider>
    );
};

//是否展示
const okContext = React.createContext(false);
//答案是否对
const AnsContext = React.createContext(false);

const questions = [
    {
        latex: "\\lim_{x\\rightarrow 0} \\frac{\\left( 1+x\\right)^{\\frac{1}{x} }  -\\left( 1+2x\\right)^{\\frac{1}{2x} }  }{sinx} ",
        ans: "\\frac{e}{2}",
        ans1: "\\frac{1}{2}e"
    },
];

const key_latex = [
    {
        latex: "\\frac{}{}",
        add: 7,
        exp: "\\frac{a}{b}",
        title:"分式"
    },
    {
        latex: "\\sqrt[]{}",
        add: 7,
        exp: "\\sqrt[a]{b}",
        title:"开b的a次方根"
    },
    {
        latex: "\\sqrt{}",
        add: 7,
        exp: "\\sqrt{a}",
        title:"开a的平方"
    },
    {
        latex: "{}^{}_{}",
        add: 2,
        exp: "{s}^{a}_{b}",
        title:"上下标"
    },
    {
        latex: "{}_{}",
        add: 2,
        exp: "{s}_{a}",
        title:"下标"
    },
    {
        latex: "{}^{}",
        add: 2,
        exp: "{s}^{a}",
        title:"上标"
    },
    {
        latex: "||",
        add: 2,
        exp: "|a|",
        title:"绝对值"
    },  
    {
        latex: "\\infty",
        add: 1,
        exp: "\\infty",
        title:"无穷"
    },
];

function Question({lat}){
    const [isOk,setIsOk] = React.useContext(okContext);
    const [isAns,setAns] = React.useContext(AnsContext);

    const [latexData,setLatexData] = React.useState("");

    React.useEffect(()=>{
        let math = document.getElementsByClassName("ques-detail");
        MathJax.typeset(math);
        let math2 = document.getElementsByClassName("key-item");
        MathJax.typeset(math2);
    },[]);
    
    let isRun= false;

    React.useEffect(()=>{
        let math3 = document.getElementsByClassName("show-ans-latex");
        MathJax.typeset(math3);
        if(latexData == lat.ans || latexData == lat.ans1){
            setAns(true);
        }
    },[latexData]);

    const add_text = (el,ev) => {
        let tem = `${latexData}${el.exp}`;
        setLatexData(tem);
        document.getElementById("in-latex").value = tem;
    };

    const data_change = (e) => {
        setLatexData(e.target.value);
    };

    const key_item = key_latex.map((el,index)=>{
        return (
            <div className="key-item" key={index} title={el.title} onClick={(event) => add_text(el,event)}>
                <div className="key-item-on">{`\\(${el.exp}\\)`}</div>
            </div>
        );
    });

    function isOk_handle(){
        if(isAns){
            setIsOk(true);
        }else{
            alert("答案错误，请重新输入！")
        }
    };

    return(
        <div className="ques-main">
            <div className="ques-box">
                <div className="ques-title">
                    问题：
                </div>
                <div className="ques-detail">
                    $${lat.latex}$$
                </div>
            </div>
            <div className="ans-box">
                <div className="ans-title">
                    答案：
                </div>
                <div className="latex-keyborad">
                    <div className="key-title">小键盘</div>
                    <div className="latex-keyborad-det">
                        {key_item}
                    </div>
                </div>
                <div className="ans-show-box">
                    <input id="in-latex" className="ans-show-in" min="1" max="20" placeholder="请输入你的答案（Latex）" onChange={data_change}/>
                    <div className="ans-show">
                        <div className="show-ans-latex">
                            {`$$${latexData}$$`}
                        </div>
                    </div>
                </div>
                <div className="botton-ques-box">
                    <div className="botton-ques" onClick={isOk_handle}>
                        提交答案
                    </div>
                </div>
            </div>
        </div>
    );
};

function MathCom(){
    // const [isOk,setIsOk] = React.useContext(okContext);
    // const [isAns,setAns] = React.useContext(AnsContext);

    const q_item = questions.map((el,index)=>{
        return(
            <Question lat={el}/>
        );
    });

    // function isOk_handle(){
    //     if(isAns){
    //         setIsOk(true);
    //     }else{
    //         alert("答案错误，请重新输入！")
    //     }
    // };

    return(
        <div className="question-boxs">
            {q_item}
        </div>
    );
};

function Is_Show({isok,setok}){
    const [isOk,setIsOk] = React.useState(false);
    const [isAns,setAns] = React.useState(false);
    return(
        <div className="is-show-mm">
            <AnsContext.Provider value={[isAns,setAns]}>
            <okContext.Provider value={[isOk,setIsOk]}>
                {isOk ? <Mer/> : <MathCom/>}
            </okContext.Provider>
            </AnsContext.Provider>
        </div>
    );
};

const mm_boxs = ReactDOM.createRoot(document.getElementById('mm-box'));
mm_boxs.render(<Is_Show/>);