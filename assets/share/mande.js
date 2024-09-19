let butt = document.getElementById("screen-mandelbrot");
let out = document.getElementById("mandelbrot-out-box");

butt.onclick = (e) => {
    if (butt.getAttribute("data-screen") == "no" && out.getAttribute("data-screen") == "no") {
        butt.setAttribute("data-screen", "yes");
        bout.setAttribute("data-screen", "yes");
    } else {
        butt.setAttribute("data-screen", "no");
        bout.setAttribute("data-screen", "no");
    }
}