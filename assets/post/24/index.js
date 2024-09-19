const data = [
    {
        "小寒": [
            1,
            6
        ],
        poem: "辛苦孤花破小寒，花心应似客心酸。"
    },
    {
        "大寒": [
            1,
            20
        ],
        poem: "心藏後凋节，岁有大寒知。"
    },
    {
        "立春": [
            2,
            4
        ],
        poem: "春度春归无限春，今朝方始觉成人。"
    },
    {
        "雨水": [
            2,
            19
        ],
        poem: "随风潜入夜，润物细无声。"
    },
    {
        "惊蛰": [
            3,
            5
        ],
        poem: "陌上杨柳方竞春，塘中鲫鲥早成荫。"
    },
    {
        "春分": [
            3,
            20
        ],
        poem: "日月阳阴两均天，玄鸟不辞桃花寒。"
    },
    {
        "清明": [
            4,
            4
        ],
        poem: "素衣莫起风尘叹，犹及清明可到家。"
    },
    {
        "谷雨": [
            4,
            19
        ],
        poem: "石渚收机巧，烟蓑建事功。"
    },
    {
        "立夏": [
            5,
            5
        ],
        poem: "南疆日长北国春，蝼蛄聒噪王瓜茵。"
    },
    {
        "小满": [
            5,
            20
        ],
        poem: "最爱垄头麦，迎风笑落红。"
    },
    {
        "芒种": [
            6,
            5
        ],
        poem: "水国芒种后，梅天风雨凉。"
    },
    {
        "夏至": [
            6,
            21
        ],
        poem: "璿枢无停运，四序相错行。"
    },
    {
        "小暑": [
            7,
            6
        ],
        poem: "倏忽温风至，因循小暑来。"
    },
    {
        "大暑": [
            7,
            22
        ],
        poem: "欲知应候何时节，六月初迎大暑风。"
    },
    {
        "立秋": [
            8,
            7
        ],
        poem: "欲知应候何时节，六月初迎大暑风。"
    },
    {
        "处暑": [
            8,
            22
        ],
        poem: "离离暑云散，袅袅凉风起。"
    },
    {
        "白露": [
            9,
            7
        ],
        poem: "离离暑云散，袅袅凉风起。"
    },
    {
        "秋分": [
            9,
            22
        ],
        poem: "暑退秋澄气转凉，日光夜色两均长。"
    },
    {
        "寒露": [
            10,
            8
        ],
        poem: "清宵寒露滴，白昼野云隈"
    },
    {
        "霜降": [
            10,
            23
        ],
        poem: "霜降三旬后，蓂馀一叶秋。"
    },
    {
        "立冬": [
            11,
            7
        ],
        poem: "立冬之后冬之先，病骨偏宜爱日天。"
    },
    {
        "小雪": [
            11,
            22
        ],
        poem: "小雪已晴芦叶暗，长波乍急鹤声嘶。"
    },
    {
        "大雪": [
            12,
            6
        ],
        poem: "日暮苍山远，天寒白屋贫"
    },
    {
        "冬至": [
            12,
            21
        ],
        poem: "杖藜雪后临丹壑，鸣玉朝来散紫宸。"
    }
]

const Jieqi = () => {

    const [poem, setPoem] = React.useState(data[0].poem);

    React.useEffect(() => {
        const arr = poem.split('，');
        const dd = document.getElementById("poem-box").firstChild;
        while (dd.hasChildNodes()) {
            dd.removeChild(dd.firstChild);
        }

        arr.forEach((element, index) => {
            let text = '';
            if (index == 0) {
                text = document.createTextNode(`${element}，`);
            } else {
                text = document.createTextNode(element);
            }
            let ele = document.createElement("span");
            ele.appendChild(text);
            dd.appendChild(ele);
        });

    }, [poem])

    React.useEffect(() => {
        const arr = poem.split('，');
        const dd = document.getElementById("poem-box").firstChild;
        while (dd.hasChildNodes()) {
            dd.removeChild(dd.firstChild);
        }

        arr.forEach((element, index) => {
            let text = '';
            if (index == 0) {
                text = document.createTextNode(`${element}，`);
            } else {
                text = document.createTextNode(element);
            }
            let ele = document.createElement("span");
            ele.appendChild(text);
            dd.appendChild(ele);
        });


        const btn = document.getElementById('zi-dky');
        btn.setAttribute('thumbsSlider', '');

        const swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 6,
            freeMode: true,
            watchSlidesProgress: true,
            on:{
                tap: function(swiper,event){
                    setPoem(data[swiper.clickedSlide.dataset.swiperSlideIndex].poem)
                },
              },
        });
        const swiper2 = new Swiper(".mySwiper2", {
            loop: true,
            spaceBetween: 10,
            thumbs: {
                swiper: swiper,
            },
        });
    }, [])

    const big = data.map((el, index) => {
        let im = `https://api.rainsin.cn/24/webp/${Object.keys(el)[0]}.webp`
        return (
            <div className="swiper-slide" key={index}>
                <img src={im} />
            </div>
        );
    });

    const smell = data.map((el, index) => {
        let im = `https://api.rainsin.cn/24/webpsmell/${Object.keys(el)[0]}.webp`
        return (
            <div className="swiper-slide" key={index}>
                <img src={im} />
            </div>
        );
    });

    return (
      <>
        <div className="swiper mySwiper2 swiper-no-swiping">
          <div className="swiper-wrapper">
            {big}
          </div>
        </div>
        <div className="swiper mySwiper" id="zi-dky">
          <div className="swiper-wrapper">
            {smell}
          </div>
        </div>
        <div className="poem-box" id="poem-box">
          <div>
          </div>
        </div>
      </>
    )
}

const jieqi_boxs = ReactDOM.createRoot(document.getElementById('swiper-jieqi'));
jieqi_boxs.render(<Jieqi />);
