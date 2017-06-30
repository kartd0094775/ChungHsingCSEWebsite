/***************************
4102056019 林凡煒 第三次作業 4/26
4102056019 Fan-wei Lin The Third Homework 4/26
***************************/
var body = document.getElementsByTagName("body");
body[0].style.fontFamily = "Microsoft JhengHei";

var h1 = document.getElementsByTagName("h1");
h1[0].style.fontSize = "3em";
h1[0].style.fontWeight = "lighter";
h1[0].style.top = "0px";
h1[0].style.color = "grey";
h1[0].style.marginLeft = "3cm";
h1[0].style.position = "absolute";

var td = document.getElementsByTagName("td");
var ul = document.getElementsByTagName("ul");
var length = td.length;

for (var i = 0; i < length; i++) {
    td[i].style.transition = "5s all";
    ul[i].style.transition = "0.5s all";
    ul[i].style.display = "none";
    ul[i].style.margin = "0";
    ul[i].style.padding = "0";
    ul[i].style.fontWeight = "lighter";
    (function (i) {
        td[i].addEventListener("mouseover", function () {
            ul[i].style.display = "block";
        });
        td[i].addEventListener("mouseout", function () {
            ul[i].style.display = "none"
        });
    }(i));
}
var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
    li[i].style.textAlign = "center";
    li[i].style.listStyle = "none";
    li[i].style.transition = "0.5s all";
    li[i].style.backgroundColor = "white";
    li[i].style.fontSize = "0.95em";
    (function (i) {
        li[i].addEventListener("mouseover", function () {
            li[i].style.backgroundColor = "powderblue";
        });
        li[i].addEventListener("mouseout", function () {
            li[i].style.backgroundColor = "white";
        });
    }(i));
}
var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
    a[i].style.textDecoration = "none";
    a[i].style.fontWeight = "bold";
    a[i].style.color = "darkblue";
}
var background = document.getElementById("background");
background.style.backgroundImage = "url(\"img/index/background-01.JPG\")";
background.style.backgroundSize = "100%";
background.style.backgroundRepeat = "no-repeat";
background.style.zIndex = "-2";
background.style.position = "fixed";
background.style.height = "100%";
background.style.width = "100%";
background.style.filter = "alpha";
background.style.opacity = "0.4";

var information = document.getElementById("information");
information.style.cssFloat = "right";

var account = document.getElementById("account");
account.style.cssFloat = "left";

var option = document.getElementsByClassName("option");
for (var i = 0; i < option.length; i++) {
    option[i].style.fontSize = "1.2em";
    option[i].style.textAlign = "center";
    option[i].style.color = "palegreen";
    option[i].style.width = "10em";
    option[i].style.border = "2px solid SteelBlue";
    option[i].style.backgroundColor = "SteelBlue";
}

