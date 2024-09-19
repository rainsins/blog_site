let ss = document.getElementsByClassName("notion-collection-item");
let arr = [];
for (let index = 0; index < ss.length; index++) {
    const item = {};
    const a = ss[index].firstElementChild;
    let imgurl = a.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.src;
    item["img"] = imgurl;
    let title = a.childNodes[1].innerText;
    item["title"] = title;
    let tt = a.childNodes[2].firstElementChild.innerText;
    item["status"] = tt;
    let content = "";
    if(a.childNodes[2].childNodes[1]){
        content = a.childNodes[2].childNodes[1].innerText;
    }
    
    item["content"] = content;
    arr.push(item);
}
console.log(JSON.stringify(arr));