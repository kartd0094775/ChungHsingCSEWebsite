/***************************
4102056019 林凡煒 第三次作業 4/26
4102056019 Fan-wei Lin The Third Homework 4/26
***************************/
var body = document.getElementsByTagName("body");
body[0].style.fontFamily = "Microsoft JhengHei";
body[0].style.backgroundImage = "-webkit-gradient( linear, center top, center bottom, color-stop(15%, White), color-stop(50%, lightsteelblue), color-stop(75%, steelblue) )";
body[0].style.width = "100%";
body[0].style.height = "768px";
body[0].style.position = "relative";

var form = document.getElementsByTagName("form");
form[0].style.marginTop = "2cm";
form[0].style.marginLeft = "13cm";

var h1 = document.getElementsByTagName("h1");
h1[0].style.fontWeight = "lighter";
h1[0].style.fontSize = "3em";
h1[0].style.textAlign = "center";
h1[0].style.color = "grey";

var textarea = document.getElementsByTagName("textarea");
textarea[0].style.overflow = "scroll";

var button = document.getElementsByClassName("button");
button[0].style.padding = "5px";
button[0].style.margin = "5px";
button[1].style.padding = "5px";
button[1].style.margin = "5px";

var p = document.getElementsByTagName("p");
var record = Array();
var length = p.length;
var array = [1, 2, 3, 4];

for (var i = 0; i < length; i++) {
    record[i] = p[i].innerHTML;
}

function Random() {
    p = document.getElementsByTagName("p");
    for (var i = 0; i < length; i++) {
        var random = Math.floor((Math.random() * length));
        var temp = p[i].innerHTML;
        p[i].innerHTML = p[random].innerHTML;
        p[random].innerHTML = temp;
    }
}
function Sort() {
    var choice = prompt("Please decide your sorting types", "Ascending or Descending");
    var h3 = document.getElementsByTagName("h3");
    if (choice == "Ascending") {
        for (var i = 0; i < length; i++) {
            var min = array[i];
            for (var j = i; j < length; j++) {
                if (array[j] < min) {
                    min = array[j];
                    array[j] = array[i];
                    array[i] = min;
                    var temp = p[i].innerHTML;
                    p[i].innerHTML = p[j].innerHTML;
                    p[j].innerHTML = temp;
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
                    var temp = p[i].innerHTML;
                    p[i].innerHTML = p[j].innerHTML;
                    p[j].innerHTML = temp;
                }
            }
        }
    } else if (choice != null) {
        alert("The format isn't correct!");
    }
}
function Reset() {
    for (var i = 0; i < length; i++) {
        p[i].innerHTML = record[i];
    }
}