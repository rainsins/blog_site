const links_data = [
    {
        name: "Rainsin（test）",
        url: "https://blog.rainsin.cn",
        img: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/mm/act.gif",
        dec: "如人饮水，冷暖自知。"
    },
    {
        name: "半截の诗",
        url: "https://sweetjing.cc/",
        img: "https://q1.qlogo.cn/g?b=qq&nk=1486823198&s=640",
        dec: "保持热爱，奔赴山海。"
    },
    {
        name: "半日闲",
        url: "https://xiaoa.me",
        img: "https://xiaoa.me/logo.png",
        dec: "偷得浮生半日闲"
    },
    {
        name: "Cream薄荷糖",
        url: "https://creammint.cn/",
        img: "https://cdn.creammint.cn/basicdata_img/avatar.webp",
        dec: "尚未佩剑，转眼遍是江湖，喜欢的人太美，想买的东西太贵~"
    },
];

if (typeof window !== 'undefined') {
    // 代码在浏览器中执行
    window.links_data = links_data;
} else {
    // 代码在Node.js中执行
    // 导出数据，以便使用node写入sitemap文件
    module.exports = links_data;
}