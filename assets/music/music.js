const audios = [
  {
    "bg": "#ffcbdc",
    "artist": "贠宗翰",
    "songName": "【秦腔】赵氏孤儿",
    "files": {
      "song": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E8%B5%B5%E6%B0%8F%E5%AD%A4%E5%84%BF.AAC" : "https://mypan.hk.cpolar.io/d/blog/aobike/%E8%B5%B5%E6%B0%8F%E5%AD%A4%E5%84%BF.AAC",
      "cover": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E7%A2%97.webp" : "https://mypan.hk.cpolar.io/d/blog/aobike/%E7%A2%97.webp"
    }
  },
  {
    "bg": "#ffc382",
    "artist": "刘随社",
    "songName": "【秦腔】放饭",
    "files": {
      "song": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E6%94%BE%E9%A5%AD.mp3" : "https://mypan.hk.cpolar.io/d/blog/aobike/%E6%94%BE%E9%A5%AD.mp3",
      "cover": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E6%94%BE%E9%A5%AD.webp" : "https://mypan.hk.cpolar.io/d/blog/aobike/%E6%94%BE%E9%A5%AD.webp"
    }
  },
  {
    "bg": "#ffcbdc",
    "artist": "卫赞成",
    "songName": "【眉户】莲花落",
    "files": {
      "song": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E8%8E%B2%E8%8A%B1%E8%90%BD.AAC" : "https://mypan.hk.cpolar.io/d/blog/aobike/%E8%8E%B2%E8%8A%B1%E8%90%BD.AAC",
      "cover": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E6%9B%B2%E6%B1%9F.webp" : "https://mypan.hk.cpolar.io/d/blog/aobike/%E6%9B%B2%E6%B1%9F.webp"
    }
  },
    {
        "bg": "#0896eba1",
        "artist": "毛崇海",
        "songName": "【秦腔】烙碗计",
        "files": {
            "song": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E7%A2%97.aac" : "https://mypan.hk.cpolar.io/d/blog/aobike/%E7%A2%97.aac",
            "cover": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E8%AE%B0.webp" : "https://mypan.hk.cpolar.io/d/blog/aobike/%E8%AE%B0.webp"
        }
    },
  {
    "bg": "#ffcbdc",
    "artist": "张蛇龙",
    "songName": "【秦腔】斩李广",
    "files": {
      "song": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E7%A7%A6%E8%85%94%20-%20%E5%BC%A0%E8%9B%87%E9%BE%99%E3%80%8A%E6%96%A9%E6%9D%8E%E5%B9%BF%E3%80%8B%E4%B8%83%E5%8D%81%E4%BA%8C%E4%B8%AA%E5%86%8D%E4%B8%8D%E8%83%BD.mp3" : "https://mypan.hk.cpolar.io/d/blog/aobike/%E7%A7%A6%E8%85%94%20-%20%E5%BC%A0%E8%9B%87%E9%BE%99%E3%80%8A%E6%96%A9%E6%9D%8E%E5%B9%BF%E3%80%8B%E4%B8%83%E5%8D%81%E4%BA%8C%E4%B8%AA%E5%86%8D%E4%B8%8D%E8%83%BD.mp3",
      "cover": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E6%9D%8E%E5%B9%BF.webp" : "https://mypan.hk.cpolar.io/d/blog/aobike/%E6%9D%8E%E5%B9%BF.webp"
    }
  },
  {
    "bg": "#c9bea28f",
    "artist": "刘随社",
    "songName": "【秦腔】杀庙",
    "files": {
      "song": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E5%88%98%E9%9A%8F%E7%A4%BE%20-%20%E3%80%90%E7%A7%A6%E8%85%94%E3%80%91%E6%9D%80%E5%BA%99_%5Bcut_41sec%5D_join.mp3": "https://mypan.hk.cpolar.io/d/blog/aobike/%E5%88%98%E9%9A%8F%E7%A4%BE%20-%20%E3%80%90%E7%A7%A6%E8%85%94%E3%80%91%E6%9D%80%E5%BA%99_%5Bcut_41sec%5D_join.mp3", 
      "cover": sessionStorage.getItem("isOut") == "false" ? "https://file.rainsin.cn/d/blog/aobike/%E6%9D%80%E5%BA%99.jpg" : "https://mypan.hk.cpolar.io/d/blog/aobike/%E6%9D%80%E5%BA%99.jpg"
    }
  },

];


function MusicPlayers() {
    const [arr, setArr] = React.useState(-1);
    const [isLoading, setIsLoading] = React.useState(false);

    const pause_m = (audio_in, index) => {
        audio_in.pause();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).removeClass('player-playing');
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-pause').hide();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-play').show();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-spinner').hide();

    }

    const play_m = (audio_in, index) => {
        audio_in.play();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).addClass('player-playing');
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-play').hide();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-pause').show();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-spinner').hide();
    }

    const load_m = (audio_in, index) => {
        $(`#a-player .player-music-card:nth-child(${index + 1})`).addClass('player-playing');
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-play').hide();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-pause').hide();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-spinner').show();
        audio_in.oncanplaythrough = function (ev) {
            play_m(audio_in, index);
            setIsLoading(false);
        }
    }

    const change_arr = (el, i) => {
        const audio_bt = document.getElementById('audio-obk');

        if (i == arr) {
            if (isLoading) {
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-spinner').hide();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-play').show();
                $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-pause').hide();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).removeClass('player-playing');
            } else {
                if (audio_bt.paused == false) {
                    pause_m(audio_bt, i);
                } else {
                    play_m(audio_bt, i);
                }
            }
        } else {
            if (isLoading) {
                $(`#a-player .player-music-card:nth-child(${arr + 1})`).find('.fa-spinner').hide();
                $(`#a-player .player-music-card:nth-child(${arr + 1})`).find('.fa-play').show();
                $(`#a-player .player-music-card:nth-child(${arr + 1})`).removeClass('player-playing');
                audio_bt.src = audios[i].files.song;
                load_m(audio_bt, i);
            } else {
                if (audio_bt.paused == false) {
                    pause_m(audio_bt, arr);
                    audio_bt.src = audios[i].files.song;
                    setIsLoading(true);
                    load_m(audio_bt, i);
                } else {
                    audio_bt.src = audios[i].files.song;
                    setIsLoading(true);
                    load_m(audio_bt, i);
                }
            }
        }

        if (i !== arr) {
            setArr(i);
        }
    }

    const item = audios.map((e, i) => {
        const bgi = {
            backgroundImage: `url(${e.files.cover})`,
        };
        return (
            <div className='player-music-card' key={i} data-id={i}>
                <div className='player-image' style={bgi}></div>
                <div className='player-wave'></div>
                <div className='player-wave'></div>
                <div className='player-wave'></div>
                <div className='player-info'>
                    <h2 className='player-title'>{ e.songName }</h2>
                    <div className='player-artist'>{ e.artist}</div>
                </div>
                <i className="fa fa-solid fa-pause player-trigger" onClick={(el) => change_arr(el,i)} aria-hidden="true" data-id={i}></i>
                <i className="fa fa-solid fa-play player-trigger" onClick={(el) => change_arr(el, i)} aria-hidden="true" data-id={i}></i>
                <i className="fa fa-solid fa-spinner player-trigger player-loading" onClick={(el) => change_arr(el, i)} aria-hidden="true" data-id={i}></i>
            </div>
        );
    });

    React.useEffect(() => {
        const audio_bt = document.getElementById('audio-obk');
        audio_bt.src = audios[0].files.song;
        audio_bt.volume = 0.3;
        audio_bt.autoplay = false;

        audio_bt.onstalled = function (ev) {
            swal('获取音频失败，可能网络有点问题或者我的服务有问题！');
            $('.player-music-card').removeClass('player-playing');
            $('.fa-play').show();
            $('.fa-pause').hide();
            $('.fa-spinner').hide();
            audio_bt.pause();
        }

        $('.fa-play').show();
        $('.fa-pause').hide();
        $('.fa-spinner').hide();
    },[])

    return (
        <>
            {item}
            <audio className="audio-obk" loop id='audio-obk' autoplay='false'></audio>
        </>
    );
};

const musicplayer_boxs = ReactDOM.createRoot(document.getElementById('a-player')).render(<MusicPlayers />);
