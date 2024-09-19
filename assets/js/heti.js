//   定义栈的类
class bracketMatchStack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        return this.stack.push(item);
    }
    pop() {
        return this.stack.pop();
    }
    // 查询栈顶的元素
    peek() {
        return this.stack[this.getSize() - 1];
    }
    //返回栈的长度
    getSize() {
        return this.stack.length;
    }
    // 栈的非空判断
    isEmpty() {
        return this.getSize() === 0;
    }
}

function testBracketIsValid(str) {
    // 以左右括号来建立一个对象，key为左括号，value为右括号
    var Map = {
        "{": "}",
        "(": ")",
        "[": "]",
    };
    //实例化一个栈
    const myStack = new bracketMatchStack();
    //遍历str字符串
    for (let v of str) {
        if (Map[v]) {
            myStack.push(v); //是左括号，入栈
        } else if (Object.values(Map).includes(v)) {
            // 右括号  将当前的元素和栈顶的第一个元素进行匹配
            let last = myStack.pop();
            if (v !== Map[last]) return false;
        } else {
            //这里排除的是空字符的情况，如果不是左右括号而是其他的空字符串或者非法字符的话，将终止本次循环，执行下一次循环
            continue;
        }
    }
    //遍历完成之后要保证栈内要为空
    return myStack.getSize() === 0;
}


//转换为HTML
function creactObject(text) {

    if (text.length == 1) {
        return;
    }

    //中间变量
    let Ht_type = "";
    let Ht_content = "";

    //获取的元素类型
    let ele_type = "";
    //获取的元素属性
    let ele_first = "";

    //判断text
    //段首不是指令开头和结束
    if (text.indexOf("@H") !== -1 && text.indexOf("@H") === 0) {
        const Ht_si = text.indexOf("@H");
        const Ht_ei = text.indexOf("{");

        Ht_type = text.substring(Ht_si, Ht_ei + 1);
        Ht_content = text.substring(Ht_ei + 1, text.length);

        ele_type = Ht_type.match(/(?<=@H).*?(?=\()/g);
        ele_first = Ht_type.match(/(?<=\().*?(?=\))/g);

        let classes = "";
        let c = "";

        //入栈
        stack_main.push(ele_type[0]);

        //可以增删指令
        switch (ele_type[0]) {
            case "div":
                classes = ele_first[0].replace(/\s*/g, "").split(",");
                c = `class="heti `;
                if (classes[0] !== "" && classes.length >= 1) {
                    classes.forEach((el, index) => {
                        if (index != classes.length - 1 && el !== "") {
                            c += `heti--${el} `;
                        } else if (index == classes.length - 1 && el !== "") {
                            c += `heti--${el}"`;
                        }
                    });
                } else {
                    c = ""
                }

                if (classes[0] === "" && classes.length == 1) {
                    c = ""
                }

                result += `<div ${c}>`;
                break;
            case "h2":
                result += `<h2>`;
                break;
            case "p":
                classes = ele_first[0].replace(/\s*/g, "").split(",");
                c = `class="`;

                if (classes[0] !== "" || classes.length >= 1) {
                    classes.forEach((el, index, arr) => {
                        if (index != (arr.length - 1) && el !== "") {
                            c += `heti-${el} `;
                        } else if (index == (arr.length - 1) && el !== "") {
                            c += `heti-${el}"`;
                        }
                    });
                } else {
                    c = ""
                }

                if (classes[0] === "" && classes.length == 1) {
                    c = ""
                }

                result += `<p ${c}>`;
                break;
            case "sp":
                classes = ele_first[0].replace(/\s*/g, "").split(",");
                c = `class="`;

                if (classes[0] !== "" || classes.length >= 1) {
                    classes.forEach((el, index, arr) => {
                        if (index != (arr.length - 1) && el !== "") {
                            c += `heti-${el} `;
                        } else if (index == (arr.length - 1) && el !== "") {
                            c += `heti-${el}"`;
                        }
                    });
                } else {
                    c = ""
                }

                if (classes[0] === "" && classes.length == 1) {
                    c = ""
                }

                result += `<span ${c}>`;
                break;
            case "em":
                result += `<em>`;
                break;
            case "u":
                c = `title="${ele_first[0]}"`;
                result += `<u ${c}>`;
                break;
            case "py":
                c = `${ele_first[0] ? `data-pinyin="${ele_first[0]}"` : ""}`;

                result += `<py ${c}>`;
                break;
            case "q":
                result += `<q>`;
                break;
            case "abbr":
                c = `title="${ele_first[0]}"`;
                result += `<abbr ${c}>`;
                break;
            case "mr":
                result += `<mark>`;
                break;
            case "tem":
                result += `<span class="heti-em">`;
                break;
            case "h1":
                result += `<h1>`;
                break;
            case "h3":
                result += `<h3>`;
                break;
            case "h4":
                result += `<h4>`;
                break;
            case "h5":
                result += `<h5>`;
                break;
            case "ul":
                result += `<ul>`;
                break;
            case "li":
                result += `<li>`;
                break;
            case "i":
                result += `<i>`;
                break;
            case "sup":
                result += `<sup>`;
                break;
            case "sub":
                result += `<sub>`;
                break;
            case "code":
                result += `<code>`;
                break;
            case "dfn":
                result += `<dfn>`;
                break;
            case "s":
                result += `<s>`;
                break;
            case "bq":
                result += `<blockquote>`;
                break;
            default:
                console.log(`Sorry, we are out of.`);
                break;
        }
        //处理文字开头的情况
        if (Ht_content[0] !== "@" && Ht_content[0] !== "}") {
            const Ht_si = 0;
            const isbehind = Ht_content.indexOf("@H") < Ht_content.indexOf("}");
            const Ht_ei = isbehind
                ? Ht_content.indexOf("@H")
                : Ht_content.indexOf("}");

            if (isbehind) {
                result += Ht_content.substring(Ht_si, Ht_ei);
                Ht_content = Ht_content.substring(Ht_ei, text.length);
            } else {
                result += Ht_content.substring(Ht_si, Ht_ei);
                Ht_content = Ht_content.substring(Ht_ei, text.length);
            }
        }
        creactObject(Ht_content);
    } else if (text.indexOf("@H") === -1 && text.indexOf("}") === -1) {
        return;
    } else if (text[0] !== "@" && text[0] !== "}" && text.indexOf("@H") !== -1 && text.indexOf("@H") < text.indexOf("}")) {
        const Ht_si = 0;
        const Ht_ei = text.indexOf("@H");

        result += text.substring(Ht_si, Ht_ei);
        text = text.substring(Ht_ei, text.length);
        creactObject(text);
    } else if (text[0] !== "@" && text[0] !== "}") {
        const Ht_si = 0;
        const Ht_ei = text.indexOf("}");

        result += text.substring(Ht_si, Ht_ei);
        text = text.substring(Ht_ei, text.length);
        creactObject(text);
    } else if (text.indexOf("}") == 0) {
        //遇到 } 就会有标签闭合，即栈顶元素闭合。

        text = text.substring(1, text.length);
        switch (stack_main.pop()) {
            case "div":
                result += `</div>`;
                break;
            case "h2":
                result += `</h2>`;
                break;
            case "p":
                result += `</p>`;
                break;
            case "sp":
                result += `</span>`;
                break;
            case "em":
                result += `</em>`;
                break;
            case "u":
                result += `</u>`;
                break;
            case "py":
                result += `</py>`;
                break;
            case "q":
                result += `</q>`;
                break;
            case "abbr":
                result += `</abbr>`;
                break;
            case "mr":
                result += `</mark>`;
                break;
            case "tem":
                result += `</span>`;
                break;
            case "text":
                result += ``;
                break;
            case "h1":
                result += `</h1>`;
                break;
            case "h3":
                result += `</h3>`;
                break;
            case "h4":
                result += `</h4>`;
                break;
            case "h5":
                result += `</h5>`;
                break;
            case "ul":
                result += `</ul>`;
                break;
            case "li":
                result += `</li>`;
                break;
            case "i":
                result += `</i>`;
                break;
            case "sup":
                result += `</sup>`;
                break;
            case "sub":
                result += `</sub>`;
                break;
            case "code":
                result += `</code>`;
                break;
            case "dfn":
                result += `</dfn>`;
                break;
            case "s":
                result += `</s>`;
                break;
            case "bq":
                result += `</blockquote>`;
                break;
            default:
                console.log(`Sorry, we are out of.`);
                break;
        }
        creactObject(text);
    }
}

function heti(str) {
    if (!testBracketIsValid(str)) {
        console.log("指令好像不对");
        return $("<div>指令好像不对</div>");
    }

    window.stack_main = [];
    window.result = "";

    str = str.replace(/[\n\t\s]+/g, "");
    creactObject(str);

    return $(result);
}

//遍历要作用的元素
$(".heti-box").each(function () {
    const _self = $(this);
    const _html = _self.html();
    _self.html("");
    _self.append(heti(_html));
});

function each_el(e, data, count) { 
    e.contents().filter((i, ele) => {
        const _e = $(ele);
        const type_e = _e[0].nodeType;
        let results = "";

        if (type_e === 3) {
            const str = _e[0].nodeValue.split("");
            
            str.forEach((el, index) => {
                let pinyins_str = "";
                if (/[\u4E00-\u9FFF]/g.test(el) && data && data[0] && count > 0) {
                    pinyins_str = data[0];
                    data.splice(0, 1);
                    count--;
                } else if (/[\u4E00-\u9FFF]/g.test(el)) {
                    pinyins_str = pinyin(el);
                }
                results += `<ruby><rb>${el}</rb><rp>(</rp><rt lang="zh-Latn">${pinyins_str}</rt><rp>)</rp></ruby>`;
            })

            _e.replaceWith($(results));
        }
        return type_e !== 3;
    }).each((i, el) => {
        each_el($(el),data,count)
    })
}
//获取拼音
$("py").each(function (i, e) {
    let count = 0;
    if ($(e).data("pinyin")) {
        const data = $(e).data("pinyin").split(",");
        let count = data.length;
        each_el($(e),data,count);
    } else {
        each_el($(e),false,false);
    }
});