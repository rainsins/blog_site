window.load_event = {
    // comments: () => {
    //     twikoo.init({
    //         envId: 'https://comment.vip.cpolar.cn',
    //         el: '#tcomment',
    //         onCommentLoaded: window.load_event.comments_style
    //     });
    // },

    musics: () => {
        const ap = new APlayer({
            container: document.getElementById('aplayer'),
            mini: false,
            autoplay: false,
            theme: '#FADFA3',
            preload: 'auto',
            volume: 0.7,
            mutex: true,
            lrcType: 3,
            loop: 'all',
            order: 'list',
            audio: [
                {
                    name: 'Honey honey',
                    artist: '孙燕姿',
                    url: 'https://api.rainsin.cn/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E5%92%95%E5%8F%BD%E5%92%95%E5%8F%BD.ogg',
                    cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/honey.webp',
                    lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20Honey%20Honey.lrc',
                    theme: '#2c9678'
                },
                {
                    name: '咕叽咕叽',
                    artist: '孙燕姿',
                    url: 'https://api.rainsin.cn/blog-music%2F%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E5%92%95%E5%8F%BD%E5%92%95%E5%8F%BD.ogg',
                    cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E5%92%95%E5%8F%BD%E5%92%95%E5%8F%BD.jpg',
                    lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E5%92%95%E5%8F%BD%E5%92%95%E5%8F%BD.lrc',
                    theme: '#2c9678'
                },
                {
                    name: '我怀念的',
                    artist: '孙燕姿',
                    url: 'https://api.rainsin.cn/blog-music%2F%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E6%88%91%E6%80%80%E5%BF%B5%E7%9A%84.ogg',
                    cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E6%88%91%E6%80%80%E5%BF%B5%E7%9A%84.webp',
                    lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E6%88%91%E6%80%80%E5%BF%B5%E7%9A%84.lrc',
                    theme: '#2c9678'
                },
                {
                    name: '遇见',
                    artist: '孙燕姿',
                    url: 'https://api.rainsin.cn/blog-music%2F%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E9%81%87%E8%A7%81.ogg',
                    cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E9%81%87%E8%A7%81.webp',
                    lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E9%81%87%E8%A7%81.lrc',
                    theme: '#2c9678'
                },
                {
                    name: '床',
                    artist: '草东没有派对',
                    url: 'https://api.rainsin.cn/blog-music%2F%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E5%BA%8A.ogg',
                    cover: 'https://api.rainsin.cn/blog-music%2F%E5%BA%8A.jpg',
                    lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E5%BA%8A.lrc',
                    theme: '#b7ae8f'
                },
                {
                    name: '让她降落',
                    artist: '何璐',
                    url: 'https://api.rainsin.cn/blog-music%2F%E4%BD%95%E7%92%90%20-%20%E8%AE%A9%E5%A5%B9%E9%99%8D%E8%90%BD.ogg',
                    cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E8%AE%A9%E5%A5%B9%E9%99%8D%E8%90%BD.webp',
                    lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E4%BD%95%E7%92%90%20-%20%E8%AE%A9%E5%A5%B9%E9%99%8D%E8%90%BD.lrc',
                    theme: '#ffc90c'
                },
                {
                    name: 'Cupid',
                    artist: 'FIFTY FIFTY',
                    url: 'https://api.rainsin.cn/blog-music%2FFIFTY%20FIFTY%20-%20Cupid.ogg',
                    cover: 'https://api.rainsin.cn/blog-music%2Fcupid.jpeg',
                    lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/FIFTY%20FIFTY%20-%20Cupid.lrc',
                    theme: '#ffc90c'
                },
                {
                    name: '爱殇',
                    artist: '小时姑娘',
                    url: 'https://api.rainsin.cn/blog-music%2F%E5%B0%8F%E6%97%B6%E5%A7%91%E5%A8%98%20-%20%E7%88%B1%E6%AE%87%20(%E7%94%B5%E8%A7%86%E5%89%A7%E3%80%8A%E4%B8%9C%E5%AE%AB%E3%80%8B%E7%89%87%E5%A4%B4%E6%9B%B2).ogg',
                    cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%88%B1%E6%AE%87.webp',
                    lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%B0%8F%E6%97%B6%E5%A7%91%E5%A8%98%20-%20%E7%88%B1%E6%AE%87%20%28%E7%94%B5%E8%A7%86%E5%89%A7%E3%80%8A%E4%B8%9C%E5%AE%AB%E3%80%8B%E7%89%87%E5%A4%B4%E6%9B%B2%29.lrc',
                    theme: '#b7ae8f'
                }
            ]
        });
    }
}