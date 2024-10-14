const ap = new APlayer({
    container: document.getElementById('player'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
  {
    name: '云宫迅音',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/1-%20云宫迅音-电视剧《西游记》片头曲%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '大圣歌',
    artist: '胡寅寅',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/2-%20大圣歌-《西游记》电视剧插曲%20–%20胡寅寅.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '五百年沧海桑田',
    artist: '郁钧剑',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/3-%20五百年沧海桑田-《西游记》电视剧插曲%20–%20郁钧剑.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '走啊走',
    artist: '周立夫',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/4-%20走啊走-《西游记》电视剧插曲%20-%20周立夫.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '敢问路在何方',
    artist: '蒋大为',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/5-%20敢问路在何方-《西游记》电视剧插曲%20–%20蒋大为.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '吹不散这点点愁',
    artist: '郁钧剑',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/6-%20吹不散这点点愁-《西游记》电视剧插曲%20–%20郁钧剑.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '女儿情',
    artist: '吴静',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/7-%20女儿情-《西游记》电视剧插曲%20-%20吴静.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '别亦难',
    artist: '吴静',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/8-%20别亦难-电视剧《西游记》插曲%20–%20吴静.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '迟重瑞',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/9-%20晴空月儿明-《西游记》电视剧插曲%20–%20迟重瑞.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '何必西天万里遥',
    artist: '吴静',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/10-%20何必西天万里遥-《西游记》电视剧插曲%20–%20吴静.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '天竺少女',
    artist: '李玲玉',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/11-%20天竺少女-《西游记》电视剧插曲%20–%20李玲玉.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '青青菩提树',
    artist: '李静娴',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/12-%20青青菩提树-《西游记》电视剧插曲%20–%20李静娴.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '无底船歌',
    artist: '叶矛',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/13-%20无底船歌-《西游记》电视剧插曲%20–%20叶矛.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '取经归来',
    artist: '蒋大为',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/14-%20取经归来-《西游记》电视剧插曲%20–%20蒋大为.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '快乐的花果山',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc1]/15-%20快乐的花果山-《西游记》%20电视剧配乐%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '初称美猴王',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/01-%20初称美猴王-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '三星洞学艺',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/02-%20三星洞学艺-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '招安上天庭',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/03-%20招安上天庭-《西游记》电视剧配乐%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '金殿戏巨灵',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/04-%20金殿戏巨灵-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '上任弼马温',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/05-%20上任弼马温-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '大圣游天宫',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/06-%20大圣游天宫-《西游记》电视剧插曲%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '助兴鹤仙舞',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/07-%20助兴鹤仙舞-《西游记》电视剧配乐%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '天王琵琶曲',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/08-%20天王琵琶曲-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '杨戬擒悟空',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/09-%20杨戬擒悟空-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '玉帝升朝堂',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/10-%20玉帝升朝堂-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '庆功天仙曲',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/11-%20庆功天仙曲-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '庆功天仙曲二',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/12-%20庆功天仙曲二-《西游记》电视剧配乐%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '绣球选佳婿',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/13-%20绣球选佳婿-《西游记》电视剧配乐%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '赴任遭祸变',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/14-%20赴任遭祸变-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '玄奘初长成',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/15-%20玄奘初长成-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '圣僧朝唐皇',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/16-%20圣僧朝唐皇-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '观音院露宝',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/17-%20观音院露宝-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '天蓬戏嫦娥',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/18-%20天蓬戏嫦娥-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '三美戏八戒',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/19-%20三美戏八戒-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '搜寻人参果',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/20-%20搜寻人参果-《西游记》电视剧配乐%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '人参果树',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/21-%20人参果树-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '仙童斥四僧',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/22-%20仙童斥四僧-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '重回三星观',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/23-%20重回三星观-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '荒山入魔窟',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/24-%20荒山入魔窟-《西游记》电视剧配乐%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '百花羞遇险',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/25-%20百花羞遇险-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '白龙刺黄袍',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/26-%20白龙刺黄袍-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '虎力登祭坛',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/27-%20虎力登祭坛-《西游记》电视剧配乐%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '幽深琵琶洞',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/28-%20幽深琵琶洞-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '蝎子精献艺',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/29-%20蝎子精献艺-《西游记》电视剧配乐%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '梦中会御弟',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/30-%20梦中会御弟-《西游记》电视剧配乐%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '铁扇剑释怀',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/31-%20铁扇剑释怀-《西游记》电视剧配乐%20–%20许镜清.mp3\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '端午横祸生',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/32-%20端午横祸生-《西游记》电视剧配乐%20–%20许镜清.flac\r',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  },
  {
    name: '无底洞游园',
    artist: '许镜清',
    url: 'https://file.rainsin.cn/d/blog/music/1986%20-《西游记-电视剧配乐原声》[disc2]/33-%20无底洞游园-《西游记》电视剧配乐%20–%20许镜清.flac',
    cover: "https://file.rainsin.cn/d/blog/img/post/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg"
  }
]
});