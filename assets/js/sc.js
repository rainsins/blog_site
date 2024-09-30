const sdsd = ["fangsong","STSONG","STfangsong","STkaiti", "kaiti","京華老宋体2","STSongti-SC-Black","STSongti-SC-Bold","STSongti-SC-Light","STSongti-SC-Regular","STKaitiSC-Regular","FZFSK--GBK1-0"];

let s = ''

sdsd.forEach((el, index) => {
    s = s + `<link rel="stylesheet" href="https://file.rainsin.cn/d/blog/font/heti/split/${el}/result.css" />`;
})
  
const sss = ["B", "D", "E", "L", "M", "R"];
let s1 = '';
sss.forEach((el, index) => {
    s1 = s1 + `<link rel="stylesheet" href="https://file.rainsin.cn/d/blog/font/heti/split/FZFWZhuZiAOldMincho${el}/result.css" />`;
})
    
console.log(s1);