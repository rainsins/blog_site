window.load_event = {
    ...window.load_event,
    player_video: () => {
        function playM3u8(video, url, art) {
            if (Hls.isSupported()) {
                if (art.hls) art.hls.destroy();
                const hls = new Hls();
                hls.loadSource(url);
                hls.attachMedia(video);
                art.hls = hls;
                art.on('destroy', () => hls.destroy());
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = url;
            } else {
                art.notice.show = 'Unsupported playback format: m3u8';
            }
        }

        window.art = new Artplayer({
            container: '#video-box',
            url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5195465185500328899_hlsb.m3u8',
            type: 'm3u8',
            theme: "#2c9678",
            flip: true,
            playbackRate: true,
            screenshot: true,
            hotkey: true,
            pip: true,
            mutex: true,
            fullscreen: true,
            fullscreenWeb: true,
            miniProgressBar: true,
            playsInline: true,
            setting: true,
            autoOrientation: true,
            customType: {
                m3u8: playM3u8,
            },
        });
    }
}

fetch("/assets/post/video/video.json")
    .then((response) => response.json())
    .then((data) => {

        data.forEach((element, index) => {
            
            let text = "";
            let list_el = element[1].forEach((e, i) => {
                i == 11 ?  text += `<li class="selected" data-url=${e}>${ element[2][i] ? element[2][i] : i + 1}</li>` : text += `<li data-url=${e}>${ element[2][i] ? element[2][i] : i + 1}</li>`;
            });
            let el = `<details>
  <summary>${element[0]}</summary>
  <ul>
    ${text}
  </ul>
</details>`;
            $("#video-list-box").append(el);
        });

        $('#video-list-box li').click(function () { 
            const clickedElement = $(this);
            $('#video-list-box li').removeClass("selected")
            clickedElement.addClass("selected")
            art.switch = clickedElement.data( "url" );
            art.currentTime = 0;
          }); 
    });
