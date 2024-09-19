

function ArterItem({ arts }) {
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
        return index_title >= 100 ? `https://obj.rainsin.cn:2000/art/${arts.path}/IMG_00${index_title}.webp` : index_title >= 10 ? `https://obj.rainsin.cn:2000/art/${arts.path}/IMG_000${index_title}.webp` : `https://obj.rainsin.cn:2000/art/${arts.path}/IMG_0000${index_title}.webp`;
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

    function update(index){
        setCount(index);
        setTitle(get_title(index));
        setUrl(get_url(index));
    }

    function set_count(index,event){
        const i = index + 1;
        update(i);
    };

    // React.useEffect(()=>{
    //     const aa = document.getElementById("swiper-img-id");
    //     aa.classList.add("swiper-img-hov");
    //     setTimeout(()=>{
    //         aa.classList.remove("swiper-img-hov");
    //     },550);
    // },[count]);

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
const art_item = [
    {
        name: "行书赤壁二赋册",
        path: "chibifu",
        time: "元",
        author: "赵孟頫",
        page: 16,
        color: "#69a7944c",
        pagefonts: [
            ["前赤壁赋", 1, 6],
            ["后赤壁赋", 7, 10],
            ["赵孟頫识", 11],
            ["东坡像", 12],
            ["鲜于枢识", 13],
            ["康棣识", 14],
            ["班惟志识", 15],
            ["赵弈识", 16]
        ]
    },
    {
        name: "红楼梦赋图册",
        path: "hongloumeng",
        time: "清",
        author: "沈谦作赋盛昱录",
        page: 39,
        color: "#ee48634c",
        pagefonts: [
            ["封面", 1],
            ["贾宝玉梦游太虚境赋", 2, 3],
            ["秋夜制风雨词赋", 4, 5],
            ["醉眠芍药茵赋", 6, 7],
            ["怡红院开夜宴赋", 8, 9],
            ["海棠结社赋", 10, 11],
            ["邢岫烟典衣赋", 12, 13],
            ["稻香村课子赋", 14, 15],
            ["葬花赋", 16, 17],
            ["滴翠亭扑蝶赋", 18, 19],
            ["中秋夜品笛桂花阴赋", 20, 21],
            ["凹晶馆月夜联句赋", 22, 23],
            ["四美钓鱼赋", 24, 25],
            ["潇湘馆听琴赋", 26, 27],
            ["焚稿断痴情赋", 28, 29],
            ["月夜感幽魂赋", 30, 31],
            ["病补孔雀裘赋", 32, 33],
            ["栊翠庵品茶赋", 34, 35],
            ["见土物思乡赋", 36, 37],
            ["芦雪亭赏雪赋", 38, 39],
        ]
    },
    {
        name: "万年不老图册",
        path: "wannianbulao",
        time: "清",
        author: "宫廷画师",
        page: 16,
        color: "#813c854c",
        pagefonts: [
            ["封面", 1],
            ["封面", 2],
            ["万年", 3],
            ["不老", 4],
            ["瑤池春宴", 5],
            ["聖相八元", 6],
            ["香山九老", 6],
            ["貞元七賢", 7],
            ["父子狀元", 8],
            ["五老朝元", 9],
            ["翰林五鳳", 10],
            ["耆英勝會", 12],
            ["虎溪三笑", 13],
            ["焚香告天", 14],
            ["進獻瑞木", 15],
            ["蟠桃宴會", 16]
        ]
    },
    {
        name: "二十四节气图",
        path: "24jieqi",
        time: "清",
        author: "张若霭",
        page: 24,
        color: "#144a744c",
        pagefonts: [
            ["立春", 1],
            ["雨水", 2],
            ["惊蛰", 3],
            ["春分", 4],
            ["清明", 5],
            ["谷雨", 6],
            ["立夏", 7],
            ["小满", 8],
            ["芒种", 9],
            ["夏至", 10],
            ["小暑", 11],
            ["大暑", 12],
            ["立秋", 13],
            ["处暑", 14],
            ["白露", 15],
            ["秋分", 16],
            ["寒露", 17],
            ["霜降", 18],
            ["立冬", 19],
            ["小雪", 20],
            ["大雪", 21],
            ["冬至", 22],
            ["小寒", 23],
            ["大寒", 24]
        ]
    },
    {
        name: "凌烟阁二十四功臣像",
        path: "24gongcheng",
        time: "清",
        author: "沈源",
        page: 24,
        color: "#f5391c4c",
        pagefonts: [
            ["长孙无忌", 1],
            ["李孝恭", 2],
            ["杜如晦", 3],
            ["魏徵", 4],
            ["房元龄", 5],
            ["高士廉", 6],
            ["尉迟敬德", 7],
            ["李靖", 8],
            ["萧瑀", 9],
            ["段志元", 10],
            ["刘弘基", 11],
            ["屈突通", 12],
            ["殷开山", 13],
            ["柴绍", 14],
            ["长孙顺德", 15],
            ["张亮", 16],
            ["侯君集", 17],
            ["张公谨", 18],
            ["程知节", 19],
            ["虞世南", 20],
            ["刘政会", 21],
            ["李𪟝", 22],
            ["唐俭", 23],
            ["秦叔宝", 24]
        ]
    },
    {
        name: "司空图二十四诗品图",
        path: "24shipin",
        time: "清",
        author: "潘是稷",
        page: 24,
        color: "#fca1064c",
        pagefonts: [
            ["雄浑", 1],
            ["冲淡", 2],
            ["纤秾", 3],
            ["沉着", 4],
            ["高古", 5],
            ["典雅", 6],
            ["洗练", 7],
            ["劲健", 8],
            ["绮丽", 9],
            ["自然", 10],
            ["含蓄", 11],
            ["豪放", 12],
            ["精神", 13],
            ["缜密", 14],
            ["疏野", 15],
            ["清奇", 16],
            ["委曲", 17],
            ["实境", 18],
            ["悲慨", 19],
            ["形容", 20],
            ["超诣", 21],
            ["飘逸", 22],
            ["旷达", 23],
            ["流动", 24]
        ]
    }
];

//传递作品信息
const ArtContext = React.createContext(null);

//方便是否生成作品页面
function Arterr() {
    const art = React.useContext(ArtContext);

    return (art ? <ArterItem arts={art} /> : "");
};

function Arter() {
    //生成作品列表
    const title_arts = art_item.map((el, i) => {
        const sty = {
            backgroundColor: el.color
        };
        return (
            <div className="art-item" onClick={(e) => setArthandle(el, e)} key={i} style={sty} title="点击查看详情">
                <div className="art-author">
                    {el.time}{el.author}
                </div>
                <div className="art-name">
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
        <ArtContext.Provider value={artContent}>
            <div className="art-title-box">
                {title_arts}
            </div>
            {isShow ? (
                <div className="swiper-box">
                    <div className="swiper-if-button" onClick={setShow}></div>
                    <Arterr />
                </div>) : ""}
        </ArtContext.Provider>
    );
};

const art_boxs = ReactDOM.createRoot(document.getElementById('art-box'));
art_boxs.render(<Arter />);