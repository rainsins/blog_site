Element.prototype._attachShadow = Element.prototype.attachShadow

Element.prototype.attachShadow = function () {

    return this._attachShadow({mode:'open'})

}

const cube = [
    {
        name: "F2L",
        count: 41,
        puzzle: "3x3x3",
        det: "F2L(前两层)是 CFOP 方法的第二步，旨在求解 3x3 的前两个底层。"
    },
    {
        name: "OLL",
        count: 57,
        puzzle: "3x3x3",
        det: "OLL(最后一层的方向)是 CFOP 方法的第三步，其目的是定向（相同颜色朝上）3x3 的顶层。"
    },
    {
        name: "PLL",
        count: 21,
        puzzle: "3x3x3",
        det: "PLL(最后一层的排列)是 CFOP 方法的第四步也是最后一步，其目的是排列最后一层的各个部分以完全解决3x3问题"
    },
    {
        name: "POLL",
        count: 3,
        puzzle: "4x4x4",
        det: "偶数高阶魔方出现的特殊情况。"
    },
    {
        name: "PPLL",
        count: 22,
        puzzle: "4x4x4",
        det: "偶数高阶魔方出现的特殊情况。"
    },
]

function Cube() {
    const [alg, setAlg] = React.useState("");
    const [algType, setAlgType] = React.useState("F2L");
    const [algArray, setAlgArray] = React.useState(f2l);
    const [count, setCount] = React.useState(41);
    const [puzzle, setPuzzle] = React.useState("3x3x3");
    const [typeDet, setTypeDet] = React.useState("F2L(前两层)是 CFOP 方法的第二步，旨在求解 3x3 的前两个底层。");

    const change_type = (e,el) => {
        setAlgType(el.name);
        setAlg("");
        setCount(el.count);
        setPuzzle(el.puzzle);
        setTypeDet(el.det);
        switch (el.name) {
            case "F2L":
                setAlgArray(f2l);
                break;
            case "OLL":
                setAlgArray(oll);
                break;
            case "PLL":
                setAlgArray(pll);
                break;
            case "POLL":
                setAlgArray(poll);
                break;
            case "PPLL":
                setAlgArray(ppll);
                break;
            default:
                break;
        }
    }

    const alg_type = cube.map((el, i) => {

        return (
            <span className={`cube-alg-type-item ${algType == el.name ? "select-item" : ""}`} onClick={(e) => change_type(e, el)}>
                {el.name}
            </span>
        );
    });

    const change_alg = (alg, e) => {
        setAlg("");
        setAlg(alg);
    }

    function show_item(){
        const temp = new Array(count).fill("");
        return temp.map((el, ind) => {
            const i = ind + 1;
            const str = i > 9 ? `${algType}${i}` : `${algType}0${i}`;
            
            const datas = algArray[str];

            const data_items = datas.data.map((el, i) => {
                if (i > 3) {
                    return;
                }
                return (
                    <div className="cube-alg" onClick={(e) => change_alg(el.alg, e)}>{el.alg}</div>
                );
            });
            
            const img_sty = {
                backgroundImage: datas.img == "" ? `url(https://gcore.jsdelivr.net/gh/Niinjoy/cube-alg-to-notion@master/cubeImg/${algType}/${str}.svg)` : `url(${datas.img})`,
            };
            
            return (
                <div className="cube-alg-det-item-box">
                    <div className="cube-alg-det-item-info">
                        <div className="cube-alg-det-item-info-img" style={img_sty}></div>
                        <span >{str}</span>
                    </div>
                    <div className="cube-alg-det-item-alg">
                        {data_items}
                    </div>
                </div>
            );
        });
    };

    React.useEffect(() => {
        const pp = document.getElementById("cube-info-box");

        const player = new TwistyPlayer({
            puzzle: puzzle,
            alg: alg,
            experimentalSetupAnchor: "end",
            experimentalStickering: algType,
            background: "none",
            backView: "top-right"
        });
        
        if (pp.firstChild.nodeName == "TWISTY-PLAYER") {
            pp.removeChild(pp.firstChild);
        }

        pp.insertBefore(player, pp.firstChild);
    }, [alg, algType, puzzle])
    
    // React.useEffect(() => {
    //     const pp = document.getElementById("cube-info-box");

    //     const player = new TwistyPlayer({
    //         puzzle: puzzle,
    //         alg: alg,
    //         experimentalSetupAnchor: "end",
    //         experimentalStickering: algType,
    //         background: "none",
    //         backView: "top-right"
    //     });
        
    //     pp.insertBefore(player, pp.firstChild);
    // },[])

    return (
        <div className="cube-box">
            <div className="cube-alg-box">
                <div className="cube-alg-type">
                    {alg_type}
                </div>
                <div className="cube-alg-type-det">
                    {typeDet}
                </div>
                <div className="cube-alg-det">
                    {show_item()}
                </div>
            </div>
            <div className="cube-info-box" id="cube-info-box">
                <div className="cube-info-alg">
                    {alg}
                </div>
            </div>
        </div>
    );
};


const cube_boxs = ReactDOM.createRoot(document.getElementById('cubes-box'));
cube_boxs.render(<Cube />);