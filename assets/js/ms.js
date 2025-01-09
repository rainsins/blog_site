window.load_event = {
    ...window.load_event,
    isOutPan: () => {
      if (sessionStorage.getItem("isOutAlert")) {
      } else {
        if(sessionStorage.getItem("isPan") == "false"){
          sessionStorage.setItem("isOutAlert", "true");
          Qmsg.warning(
            "家里停电了，服务器宕了，页面可能会有异常，请见谅！",
            { timeout: 5000 }
          );
        }
      }
    }
  };

  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "o8juqodfs3");