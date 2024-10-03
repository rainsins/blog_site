// 指定确切的版本号
import { codeToHtml } from 'https://esm.sh/shiki@1.0.0'

function CodeBox({ code_data, BB_isActive, icon_data, f_node,code_content_index }) {

    const [codeText, setCodeText] = React.useState(BB_isActive >= 0 ? code_data[BB_isActive].code : code_data[0].code);
    const [codeIcon, setCodeIcon] = React.useState(BB_isActive >= 0 ? code_data[BB_isActive].icon : code_data[0].icon);
    const [codeType, setCodeType] = React.useState(BB_isActive >= 0 ? code_data[BB_isActive].type : code_data[0].type);
    const [codeIndex, setCodeIndex] = React.useState(BB_isActive >= 0 ? BB_isActive : 0);

    React.useEffect(() => {
        (() => {
            Array.from(document.querySelectorAll(`#code-nav-${code_content_index}`)).forEach(el => {
                BetterScroll.createBScroll(el, {
                    bindToTarget: true,
                    scrollX: true,
                    scrollY: false,
                    bounce: true,
                    movable: true,
                    click: false,
                    mouseWheel: {
                        speed: 20,
                        invert: false,
                        easeTime: 300
                    },
                    scrollbar: {
                        fade: true,
                        interactive: true,
                        scrollbarTrackClickable: true,
                        scrollbarTrackOffsetType: 'clickedPoint'
                    }
                });
            })
            
            return new Promise((resolve, reject) => {
                resolve(codeToHtml(codeText, {
                    lang: codeType,
                    theme: 'one-dark-pro'
                }))
            });
        })().then(rel => {
            const tete = document.getElementById(`code-content-${code_content_index}`);

            tete.innerHTML = rel + `<div class="code-type-smell">${codeType}</div>`;

            document.querySelector(`#code-copy-${code_content_index}`).onclick = e => myClipboard(resolved[3]);

            window.nn_click_count = 0;

            BetterScroll.createBScroll(tete, {
                bindToTarget: true,
                scrollX: true,
                scrollY: true,
                bounce: true,
                click: false,
                probeType: 1,
                mouseWheel: {
                    speed: 20,
                    invert: false,
                    easeTime: 300
                },
                scrollbar: {
                    fade: true,
                    interactive: true,
                    scrollbarTrackClickable: true,
                    scrollbarTrackOffsetType: 'clickedPoint'
                }
            });
        });
    }, []);

    const handleClick = (i) => {
        (() => {
            return new Promise((resolve, reject) => {
                if (codeIndex != i) {
                    resolve([codeToHtml(code_data[i].code, {
                        lang: code_data[i].type,
                        theme: 'one-dark-pro'
                    }), i, codeIndex, code_data[i].code])
                    reject(false);
                } else {
                    resolve();
                    reject(true);
                }
            })
        })().then((resolved, rejected) => {
            console.log(resolved);
            
            if (!rejected) {
                const item = Array.from(f_node.querySelectorAll(`#code-nav-${code_content_index} .code-nav-item`));
                console.log(item);
                
                item[resolved[2]].classList.remove("active");

                item[resolved[1]].classList.add("active");

                const tete = document.getElementById(`code-content-${code_content_index}`);

                tete.innerHTML = "";

                setCodeIndex(resolved[1]);
                setCodeText(resolved[3]);

                resolved[0].then(rel => {
                    tete.innerHTML = rel + `<div class="code-type-smell">${code_data[resolved[1]].type}</div>`;

                    BetterScroll.createBScroll(tete, {
                        bindToTarget: true,
                        scrollX: true,
                        scrollY: true,
                        bounce: true,
                        click: false,
                        probeType: 1,
                        mouseWheel: {
                            speed: 20,
                            invert: false,
                            easeTime: 300
                        },
                        scrollbar: {
                            fade: true,
                            interactive: true,
                            scrollbarTrackClickable: true,
                            scrollbarTrackOffsetType: 'clickedPoint'
                        }
                    });
                })
            }
        })
    }

    const nav_item = code_data.map((ee, ii) => {
        const ite = {
            display: "inline-block",
            alignSelf: "center",
            width: "1.5em",
            aspectRatio: "1",
            backgroundColor: "transparent",
            backgroundImage: icon_data[ee.icon],
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            marginRight: "4px",
        }
        return (<>
            <div className={`code-nav-item ${ii == codeIndex ? "active" : ""}`} onClick={e => handleClick(ii)}>
                <span className="code-nav-item-icon" style={ite}></span>
                <span className="code-nav-item-title">
                    {ee.title}
                </span>
            </div>
        </>);
    })

    const copyCode = () => {
        myClipboard(codeText);
    }

    return (<><div className="code-nav-box" id={`code-nav-${code_content_index}`}><div className="code-nav">
        {nav_item}
    </div></div>
        <div className="code-content" id={`code-content-${code_content_index}`}></div>
        <div class="code-copy-smell" id={`code-copy-${code_content_index}`} title="点击复制" onClick={e => copyCode()}></div>
    </>);
}

window.load_event = {
    ...window.load_event,
    code_group: () => {
        const fetcher = (...args) => fetch(...args).then((res) => res.json());

        const foo = Array.from(document.getElementsByClassName('code-group'));

        foo.forEach((el, index) => {
            let BB_isActive = -1;
            let codetext = el.textContent;
            const ast_tree = [];
            

            while (/@tab([a-zA-Z. ])+\n/g.test(codetext)) {
                let ast_obj = {};

                let tabs = /@tab([a-zA-Z. /])+\n/g.exec(codetext);
                let tabs_arr = tabs[0].split(" ");

                ast_obj.title = tabs_arr[1].replace("\n", "");
                ast_obj.icon = tabs_arr[3] ? tabs_arr[2] : tabs_arr[2].substring(0, tabs_arr[2].length - 1);
                ast_obj.isActive = tabs_arr[3] ? true : false;
                BB_isActive = tabs_arr[3] ? index : -1;
                codetext = codetext.substring(tabs.index + tabs[0].length, codetext.length);

                let type_code_text = /::::[a-zA-Z]+\n/g.exec(codetext);
                ast_obj.type = (/[a-zA-Z]+/g.exec(type_code_text[0]))[0];
                codetext = codetext.substring(type_code_text.index + type_code_text[0].length, codetext.length);

                let code_end = /::::\n/g.exec(codetext);
                ast_obj.code = codetext.substring(0, code_end.index);
                codetext = codetext.substring(code_end.index + code_end[0].length, codetext.length);

                ast_tree.push(ast_obj);

            }

            console.log(ast_tree);
        

            el.innerHTML = "";

            ReactDOM.createRoot(el).render(<CodeBox code_data={ast_tree} BB_isActive={BB_isActive} icon_data={code_data} f_node={el} code_content_index={index} />);
        })
    }
}