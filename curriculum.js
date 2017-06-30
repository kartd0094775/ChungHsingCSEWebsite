/***************************
4102056019 林凡煒 第三次作業 4/26
4102056019 Fan-wei Lin The Third Homework 4/26
***************************/
var body = document.getElementsByTagName("body");
body[0].style.fontFamily = "Microsoft JhengHei";

var h1 = document.getElementsByTagName("h1");
h1[0].style.fontSize = "3em";
h1[0].style.fontWeight = "lighter";
h1[0].style.textAlign = "center";
h1[0].style.textShadow = "2px 2px 0.8px";
h1[0].style.color = "grey";

Transition();

var figcaption = document.getElementsByTagName("figfigcaption");
for (var i = 0; i < figcaption.length; i++) {
    figcaption[i].style.fontWeight = "lighter";
    figcaption[i].style.fontSize = "1.2em";
}

var div = document.getElementsByTagName("div");
for (var i = 0; i < div.length; i++) {
    div[i].style.textAlign = "center";
}

var back = document.getElementById("back");
back.style.textAlign = "left";

var peru = document.getElementById("peru");
var silver = document.getElementById("silver");
var gold = document.getElementById("gold");

function SetCanvas (canvas) {
    canvas.style.position = "absolute";
    canvas.style.width = "100%";
    canvas.style.height = "200px";
    canvas.style.top = "0px";
    canvas.style.zIndex = "-1";
    var ctx = canvas.getContext("2d");
    var grd = ctx.createRadialGradient(100, 50, 5, 120, 60, 100);
    grd.addColorStop(0, canvas.id);
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 10, 1500, 1000);
}
if (peru != null)
    window.addEventListener("load", SetCanvas(peru));
if (silver != null)
    window.addEventListener("load", SetCanvas(silver));
if(gold != null)
    window.addEventListener("load", SetCanvas(gold));


function Transition() {
    var img = document.getElementsByTagName("img");
    for (var i = 0; i < img.length; i++) {
        img[i].style.width = "20%";
        img[i].style.height = "20%";
        img[i].style.transition = "width 2s";
        (function (i) {
            img[i].addEventListener("mouseover", function () {
                img[i].style.width = "60%";
                img[i].style.height = "60%";
            })
            img[i].addEventListener("mouseout", function () {
                img[i].style.width = "20%";
                img[i].style.height = "20%";
            })
        }(i))
    }
}

var figcaption = document.getElementsByTagName("figcaption");
var img = document.getElementsByTagName("img");
var record = Array();
var record2 = Array();
var length = img.length;

for (var i = 0; i < length; i++) {
    record[i] = figcaption[i].innerHTML;
    record2[i] = img[i].outerHTML;
}

function Random() {
    figcaption = document.getElementsByTagName("figcaption");
    img = document.getElementsByTagName("img");
    for (var i = 0; i < length; i++) {
        var random = Math.floor((Math.random() * length));
        var temp = figcaption[i].innerHTML;
        figcaption[i].innerHTML = figcaption[random].innerHTML;
        figcaption[random].innerHTML = temp;
        var temp = img[i].outerHTML;
        img[i].outerHTML = img[random].outerHTML;
        img[random].outerHTML = temp;
    }
    Transition();
}
function Sort() {
    var choice = prompt("Please decide your sorting types", "Ascending or Descending");
    figcaption = document.getElementsByTagName("figcaption");
    img = document.getElementsByTagName("img");
    var array = Array();
    for (var i = 0; i < length; i++) {
        array[i] = encodeURIComponent(figcaption[i].innerHTML.charAt(0));
    }
    if (choice == "Ascending") {
        for (var i = 0; i < length; i++) {
            var min = array[i];
            for (var j = i; j < length; j++) {
                if (array[j] < min) {
                    min = array[j];
                    array[j] = array[i];
                    array[i] = min;
                    var temp = figcaption[i].innerHTML;
                    figcaption[i].innerHTML = figcaption[j].innerHTML;
                    figcaption[j].innerHTML = temp;
                    var temp = img[i].outerHTML;
                    img[i].outerHTML = img[j].outerHTML;
                    img[j].outerHTML = temp;
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
                    var temp = figcaption[i].innerHTML;
                    figcaption[i].innerHTML = figcaption[j].innerHTML;
                    figcaption[j].innerHTML = temp;
                    var temp = img[i].outerHTML;
                    img[i].outerHTML = img[j].outerHTML;
                    img[j].outerHTML = temp;
                }
            }
        }
    } else if (choice != null) {
        alert("The format isn't correct!");
    }
    Transition();
}
function Reset() {
    for (var i = 0; i < length; i++) {
        figcaption[i].innerHTML = record[i];
    }
    for (var i = 0; i < length; i++) {
        img[i].outerHTML = record2[i];
    }
    Transition();
}
