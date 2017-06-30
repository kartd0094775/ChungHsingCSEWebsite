/***************************
4102056019 林凡煒 第三次作業 4/26
4102056019 Fan-wei Lin The Third Homework 4/26
***************************/
var body = document.getElementsByTagName("body");
body[0].style.fontFamily = "Microsoft JhengHei";

var h1 = document.getElementsByTagName("h1");
h1[0].style.fontWeight = "lighter";
h1[0].style.fontSize = "3em";
h1[0].style.textAlign = "center";
h1[0].style.textShadow = "2px 2px 0.8px";
h1[0].style.color = "grey";

var h3 = document.getElementsByTagName("h3");
for (var i = 0; i < h3.length; i++) {
    h3[i].style.textDecoration = "underline";
}

var img = document.getElementsByTagName("img");
for (var i = 0; i < img.length; i++) {
    img[i].style.boxShadow = "-25px 25px 50px dimgrey";
}
function CanvasBackGrd() {
    var canvas = document.getElementsByClassName("myCanvas");
    for (var i = 0; i < canvas.length; i++) {
        canvas[i].style.position = "absolute";
        canvas[i].style.width = "100%";
        canvas[i].style.height = "50%";
        canvas[i].style.zIndex = "-1";
        var ctx = canvas[i].getContext("2d");
        var grd = ctx.createRadialGradient(200, 50, 10, 300, 60, 200);
        grd.addColorStop(0, "lightsteelblue");
        grd.addColorStop(1, "white");
        ctx.fillStyle = grd;
        ctx.fillRect(10, 10, 1500, 1000);
    }
}
CanvasBackGrd();
var tr = document.getElementsByTagName("tr");
var record = Array();
var length = tr.length;

for (var i = 0; i < length; i++) {
    record[i] = tr[i].innerHTML;
}

function Random() {
    tr = document.getElementsByTagName("tr");
    for (var i = 0; i < length; i++) {
        var random = Math.floor((Math.random() * length));
        var temp = tr[i].innerHTML;
        tr[i].innerHTML = tr[random].innerHTML;
        tr[random].innerHTML = temp;
    }
    CanvasBackGrd();
}
function Sort() {
    var choice = prompt("Please decide your sorting types", "Ascending or Descending");
    var h3 = document.getElementsByTagName("h3");
    var array = Array();
    for (var i = 0; i < length; i++) {
        array[i] = encodeURIComponent(h3[i].innerHTML.charAt(0));
    }
    if (choice == "Ascending") {
        for (var i = 0; i < length; i++) {
            var min = array[i];
            for (var j = i; j < length; j++) {
                if (array[j] < min) {
                    min = array[j];
                    array[j] = array[i];
                    array[i] = min;
                    var temp = tr[i].innerHTML;
                    tr[i].innerHTML = tr[j].innerHTML;
                    tr[j].innerHTML = temp;
                }
            }
        }
    } else if (choice == "Descending") {
        for (var i = 0; i < length; i++) {
            var max = array[i];
            for (var j = i; j < length; j++) {
                if (array[j] > max) {
                    max = array[j];
                    array[j] = array[i];
                    array[i] = max;
                    var temp = tr[i].innerHTML;
                    tr[i].innerHTML = tr[j].innerHTML;
                    tr[j].innerHTML = temp;
                }
            }
        }
    } else if (choice != null) {
        alert("The format isn't correct!");
    }
    CanvasBackGrd();
}
function Reset() {
    for (var i = 0; i < length; i++) {
        tr[i].innerHTML = record[i];
    }
    CanvasBackGrd();
}
