function plot(){
    const data = [
        {
            target: "#root1",
            fn:"(0.64*sqrt(abs(x))-0.8+1.2^abs(x)*cos(200*x))*sqrt(cos(x))"
        },
        {
            target: "#root2",
            fn:"x"
        },
    ];
    for(let i = 0;i < data.length;i++){
        functionPlot({
            target: data[i].target,
            width: $(data[i].target).width(),
            height: $(data[i].target).width() / 1.77,
            xAxis: {
                label: "x - axis",
                domain: [-4, 4]
            },
            yAxis: {
              label: "y - axis"
            },
            grid: true,
            data: [
              {
                fn: data[i].fn,
                graphType: "polyline",
                color: "#FF0000",
                range: [-2, 2],
              }
            ]
        });
    }
};



$(document).ready(function () {
plot();
});

$(window).resize(function () {
plot();
});