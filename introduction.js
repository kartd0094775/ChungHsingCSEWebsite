/***************************
4102056019 林凡煒 第三次作業 4/26
4102056019 Fan-wei Lin The Third Homework 4/26
***************************/

var body = document.getElementsByTagName("body");
body[0].style.fontFamily = "Microsoft JhengHei";

var mark = document.getElementsByTagName("mark");
for (var i = 0 ; i < mark.length; i++) {
    mark[i].style.backgroundColor = "white";
    mark[i].style.fontSize = "1.2em";
}

var h1 = document.getElementsByTagName("h1");
for (var i = 0 ;i < h1.length ; i++) {
    h1[i].style.fontWeight = "lighter";
    h1[i].style.fontSize = "3em";
    h1[i].style.textAlign = "center";
    h1[i].style.textShadow = "2px 2px 0.8px";
    h1[i].style.color = "grey";
}

var section = document.getElementsByTagName("section");
for (var i = 0; i < section.length; i++) {
    section[i].style.marginTop = "0.5cm";
    section[i].style.marginBottom = "0.5cm";
    section[i].style.marginLeft = "2cm";
}
var canvas = document.getElementById("myCanvas");
canvas.style.position = "absolute";
canvas.style.width = "100%";
canvas.style.height = "200px";
canvas.style.top = "0px";
canvas.style.zIndex = "-1";
var ctx = canvas.getContext("2d");
var grd = ctx.createRadialGradient(120, 60, 5, 120, 100, 100);
grd.addColorStop(0, "lightsteelblue");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 1500, 1000);
var logo = document.getElementsByClassName("logo");
for (var i = 0; i < logo.length; i++) {
  (function (i) {
        logo[i].style.position = "relative";
        logo[i].style.transition = "1s";
        window.addEventListener("load", function () {
            var count = 0;
            var start = setInterval(MoveAround, 1000);
            function MoveAround() {
                count++;
                switch (count) {
                    case 0:
                        logo[i].style.marginLeft = "0px";
                        logo[i].style.opacity = "1";
                        break;
                    case 1:
                        logo[i].style.marginLeft = "100px";
                        logo[i].style.opacity = "0";
                        break;
                    case 2:
                        logo[i].style.marginLeft = "400px";
                        logo[i].style.opacity = "1";
                        break;
                    case 3:
                        logo[i].style.marginLeft = "100px";
                        logo[i].style.opacity = "0";
                        count = -1;
                        break;
                    default:
                        break;
                }

            }

        })

    }(i));
}
