function Mer() {
    React.useEffect(() => {
        const mm = document.getElementsByClassName("is-show-mm")[0];
        mm.setAttribute("style", "display: grid;grid-auto-rows: 5px;grid-template-columns: repeat(auto-fill, calc(50% - 5px));align-items: start;justify-content: space-between;gap:unset;");
    },[])

    const loadImage = (e) => {
        const el = e.target;
        const rows = Math.ceil(el.clientHeight / 5) + 2;
        el.style.gridRowEnd = `span ${rows}`;
    }
    return (
        <>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNrdmRQRjlUeGhuQjJIZkE_ZT1ja3lFMmc.jpg" onLoad={loadImage} />
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRqQVBrUFRfa1hWdFpCcUE_ZT1jOGhVNzU.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRsamx0SmRZdUc3XzFwcXc_ZT1hT1hRWG4.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRmY082bmVJckNzMk5SU0E_ZT1SV1hIOWM.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNuT1d4c2FBMHV6YVk2OEE_ZT1Gc1hhQW8.png" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNtd05TUS1vQ3pmb3hFVUE_ZT1DSVBEeVA.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNvZDMwOUsyYTZYZFd2dFE_ZT1udlVoSnU.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNyeHVOc2pCeGNQWlFfTnc_ZT1rWVBzZ00.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNwN1FpNW9xcDJQLUtITlE_ZT1vZ2NtUGc.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGN5Q0RKaUZQSjRZNW9tT2c_ZT02dkFkTVo.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGMyM2ZRWDNzN1MtY0k3UlE_ZT1OQjNLeGk.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGMzeXpRNEdTeDZzLWk4VFE_ZT14VndqTlA.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGM4MTJlSXpFakx2Slo5Y1E_ZT1BWHk0YlY.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRCbUFfaWxLMF9yWXZOQmc_ZT1zOW1FRWM.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGREb1BMbTNoNDhIQnZkTWc_ZT1BVEFVYVA.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRGZnJOdjhQNlJuN3lUTXc_ZT1pYnRaVkE.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRJV3R1eW1NOXVUb1RPRHc_ZT1LSGFaSWk.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRKeXBJX1YyVTRmMEhnYWc_ZT1TMGxKdFc.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRLZEN0THZlOURQQ1dqelE_ZT1DR3lEV1A.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRMeEdZRlNUT0FVZEgzYlE_ZT1SdHVtQ00.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGROVnd0V29LM2JrU0RabGc_ZT11a1dYM2g.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRRQjhUUWVtcDFJQkRwSlE_ZT1WMmxjbkI.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRUOUl0eUFUMU0yZUtwdHc_ZT1ySkp4a2c.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRXUDMtbHcydGl5M29hdnc_ZT1aQjdrQXg.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRvNWJFQUFrbnpnb1gzLVE_ZT1LWWxCWUE.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRxblB6NGEzN3VfR0tPNVE_ZT1pd3lQSTk.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRnRjU2OUJyMkNHWnppc0E_ZT11RzRzVG4.jpg" onLoad={loadImage}/>
            <img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGRaWG5ieUNXQm5TVDh3U0E_ZT1VUGVsTDI.jpg" onLoad={loadImage}/>
        </>
    );
};

//是否展示
const okContext = React.createContext(false);
//答案是否对
const AnsContext = React.createContext(false);

const questions = [
    {
        latex: `1.\\quad\\lim_{x\\rightarrow 0} \\frac{\\left( 1+x\\right)^{\\frac{1}{x} }  -\\left( 1+2x\\right)^{\\frac{1}{2x} }  }{sinx} = \\quad ?`,
        ans: "\\frac{e}{2}",
        ans1: "\\frac{1}{2}e",
        ans2: "e",
        ans3: "?"
    },
];

const key_latex = [
    {
        latex: "\\frac{}{}",
        add: 7,
        exp: "\\frac{a}{b}",
        title: "分式"
    },
    {
        latex: "\\sqrt[]{}",
        add: 7,
        exp: "\\sqrt[a]{b}",
        title: "开b的a次方根"
    },
    {
        latex: "\\sqrt{}",
        add: 7,
        exp: "\\sqrt{a}",
        title: "开a的平方"
    },
    {
        latex: "{}^{}_{}",
        add: 2,
        exp: "{s}^{a}_{b}",
        title: "上下标"
    },
    {
        latex: "{}_{}",
        add: 2,
        exp: "{s}_{a}",
        title: "下标"
    },
    {
        latex: "{}^{}",
        add: 2,
        exp: "{s}^{a}",
        title: "上标"
    },
    {
        latex: "||",
        add: 2,
        exp: "|a|",
        title: "绝对值"
    },
    {
        latex: "\\infty",
        add: 1,
        exp: "\\infty",
        title: "无穷"
    },
];

function Question({ lat }) {
    const [isOk, setIsOk] = React.useContext(okContext);
    const [isAns, setAns] = React.useContext(AnsContext);

    const [latexData, setLatexData] = React.useState("");

    React.useEffect(() => {
        let math = document.getElementsByClassName("ques-detail");
        MathJax.typeset(math);
        let math2 = document.getElementsByClassName("key-item");
        MathJax.typeset(math2);
    }, []);

    let isRun = false;

    React.useEffect(() => {
        let math3 = document.getElementsByClassName("show-ans-latex");
        MathJax.typeset(math3);
        if (latexData == lat.ans || latexData == lat.ans1 || latexData == lat.ans2 || latexData == lat.ans3) {
            setAns(true);
        }
    }, [latexData]);

    const add_text = (el, ev) => {
        let tem = `${latexData}${el.exp}`;
        setLatexData(tem);
        document.getElementById("in-latex").value = tem;
    };

    const data_change = (e) => {
        setLatexData(e.target.value);
    };

    const key_item = key_latex.map((el, index) => {
        return (
            <div className="key-item" key={index} title={el.title} onClick={(event) => add_text(el, event)}>
                <div className="key-item-on">{`\\(${el.exp}\\)`}</div>
            </div>
        );
    });

    function isOk_handle() {
        if (isAns) {
            setIsOk(true);
        } else {
            alert("答案错误，请重新输入！")
        }
    };

    return (
        <div className="ques-main">
            <div className="ques-box">
                <div className="ques-title">
                    问题：
                </div>
                <div className="ques-detail">
                    $${lat.latex}$$
                <br></br>
                    $$ {`2. \\quad 2+\\frac{1}{1+\\frac{1}{2+\\frac{2}{3+\\frac{3}{4+\\frac{4}{5+ \\cdots } } } } } = \\quad ?` } $$
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
                    <input id="in-latex" className="ans-show-in" min="1" max="20" placeholder="请输入你的答案（Latex）" onChange={data_change} />
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

function MathCom() {
    // const [isOk,setIsOk] = React.useContext(okContext);
    // const [isAns,setAns] = React.useContext(AnsContext);

    const q_item = questions.map((el, index) => {
        return (
            <Question lat={el} />
        );
    });

    React.useEffect(() => {
        let math = document.getElementsByClassName("show-tip-latex");
        MathJax.typeset(math);
    }, []);

    return (
        <div className="question-boxs">
            {q_item}
            <h3 id='提示'>提示（第一题）</h3>
            <p>
            分子变形：
            </p>
            <div className="show-tip-latex">
            {`$$ \\left( 1+x\\right)^{\\frac{1}{x} }  -\\left( 1+2x\\right)^{\\frac{1}{2x} }  =e^{\\frac{ln\\left( 1+x\\right)  }{x} }-e^{\\frac{ln\\left( 1+2x\\right)  }{2x} }  $$`}
            </div>
            <p>
            对分子进行泰勒展开，写成无穷级数形式：
            </p>
            <p>
            由以下常用的展开式：
            </p>
            <div className="show-tip-latex">
            {`$$ ln\\left( 1+x\\right)  =x-\\frac{1}{2} x^{2}+\\frac{1}{3} x^{3}\\  \\cdots  $$`}
            </div>
            <p>
            我们可以有
            </p>
            <div className="show-tip-latex">
            {`$$ \\frac{ln\\left( 1+x\\right)  }{x} =1-\\frac{1}{2} x+\\frac{1}{3} x^{2}-\\  \\cdots  $$`}
            </div>
            <p>
            故我们可以得到分子指数部分的展开
            </p>
            <div className="show-tip-latex">
            {`$$ e^{\\frac{ln\\left( 1+x\\right)  }{x} }=e^{\\left[ 1-\\frac{1}{2} x+\\frac{1}{3} x^{2}-\\  \\cdots \\right]  }=e\\  e^{\\left[ -\\frac{1}{2} x+\\frac{1}{3} x^{2}-\\  \\cdots \\right]  } $$`}
            </div>
            <p>
            又由另外一个常用的展开式：
            </p>
            <div className="show-tip-latex">
            {`$$ e^{x}=1+x+\\frac{1}{2} x^{2}+\\frac{1}{6} x^{3}+\\  \\cdots  $$`}
            </div>
            <p>
            所以有
            </p>
            <div className="show-tip-latex">
            {`$$ e\\  e^{\\left[ -\\frac{1}{2} x+\\frac{1}{3} x^{2}-\\  \\cdots \\right]  }=e\\left[ 1-\\frac{1}{2} x+\\underbrace{\\frac{1}{3} x^{2}\\  \\cdots +\\frac{1}{2} \\left( -\\frac{1}{2} x+\\frac{1}{3} x^{2}\\  \\cdots \\right)^{2}  +\\cdots }_{\\text{次数高于1次} } \\right]   $$`}
            </div>
            <p>
            此题我们只需到<strong>一次</strong>就行了，如上，我们将次数高于1次的合并有
            </p>
            <div className="show-tip-latex">
            {`$$ \\left( 1+x\\right)^{\\frac{1}{x} }  =e\\left[ 1-\\frac{1}{2} x+o\\left( x\\right)  \\right]  =e-\\frac{1}{2} ex+o\\left( x\\right)  $$`}
            </div>
            <p>
            于是我们得到了一个无穷小等价
            </p>
            <div className="show-tip-latex">
            {`$$ \\left( 1+x\\right)^{\\frac{1}{x} }  -e\\  \\sim \\  -\\frac{1}{2} ex $$`}
            </div>
            <p>
            应用到此题中 
            </p>
            <div className="show-tip-latex">
            {`$$ \\lim_{x\\rightarrow 0} \\frac{\\left( 1+x\\right)^{\\frac{1}{x} }  -\\left( 1+2x\\right)^{\\frac{1}{2x} }  }{sin\\  x} =\\lim_{x\\rightarrow 0} \\frac{\\left( 1+x\\right)^{\\frac{1}{x} }  -e-[\\left( 1+2x\\right)^{\\frac{1}{2x} }  -e]}{sin\\  x} =\\lim_{x\\rightarrow 0} \\frac{-\\frac{1}{2} ex+ex}{sin\\  x} =\\lim_{x\\rightarrow 0} \\frac{\\frac{1}{2} ex}{sin\\  x} $$`}
            </div>
            <p>
            由重要极限
            </p>
            <div className="show-tip-latex">
            {`$$ \\lim_{x\\rightarrow 0} \\frac{sin\\  x}{x} \\  =\\  1 $$`}
            </div>
            <p>
            这样就可以得出答案了。上面的无穷小等价在求极限时很有用，如果你要考研的话可以记一记。
            </p>
        </div>
    );
};

function Is_Show({ isok, setok }) {
    const [isOk, setIsOk] = React.useState(false);
    const [isAns, setAns] = React.useState(false);
    return (
        <div className="is-show-mm">
            <AnsContext.Provider value={[isAns, setAns]}>
                <okContext.Provider value={[isOk, setIsOk]}>
                    {isOk ? <Mer /> : <MathCom />}
                </okContext.Provider>
            </AnsContext.Provider>
        </div>
    );
};

const mm_boxs = ReactDOM.createRoot(document.getElementById('mm-box'));
mm_boxs.render(<Is_Show />);