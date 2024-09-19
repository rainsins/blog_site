const cssLink = document.createElement("link") 
cssLink.href = "/assets/css/change-comment.css"; 
cssLink.rel = "stylesheet"; 
cssLink.type = "text/css"; 
 
//Instead of this
//frames['frame1'].document.body.appendChild(cssLink);
//Do this
 
var doc = document.getElementsByClassName("giscus-frame")[0].document.head.appendChild(cssLink);

