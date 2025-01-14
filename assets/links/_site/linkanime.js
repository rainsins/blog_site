window.load_event = {
  ...window.load_event,
  animes1: $(".links-item-box").hover((e)=>{
      anime({
        targets: e.currentTarget.firstChild.firstChild,
        keyframes: [
          {rotate: "18deg",},
          {rotate: "-18deg"},
          {rotate: "10deg"},
          {rotate: "-8deg"},
          {rotate: "5deg"},
          {rotate: "-1deg"},
          {rotate: 0},
        ],
        easing: 'easeInOutSine'
      });
    },(e)=>{
  }),
}