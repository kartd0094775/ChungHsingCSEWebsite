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
h1[0].style.color = "darkblue";

var div = document.getElementsByTagName("div");
for (var i = 0; i < div.length; i++) {
    div[i].style.border = "20px solid transparent";
}

var td = document.getElementsByTagName("td");

for (var i = 0; i < td.length; i++) {
    var p = td[i].getElementsByTagName("p");
    var text = td[i].getElementsByClassName("text");

    for (var k = 0; k < p.length; k++) {
        p[k].style.paddingLeft = "2cm";
    }
    for (var j = 0; j < text.length; j++) {
        text[j].style.paddingLeft = "2cm";
    }

}

// var img = document.getElementsByTagName("img");
// for (var i = 0; i < img.length; i++) {
//     var logo = img[i].getElementsByClassName("logo");
//     for (var j = 0; j < logo.length; j++) {
//         logo[j].style.background = "-webkit-box-reflect: right 5px -webkit-gradient( linear, right top, left top, from(transparent), to(white));"
//     }
// }

var stretch = document.getElementsByClassName("stretch");
stretch[0].style.borderImage = "url(img/contact/contact_information.png) 25 20 25 20 stretch";
stretch[1].style.borderImage = "url(img/contact/contact_information.png) 25 20 25 20 stretch";


var background = document.getElementsByClassName("background");
background[0].style.width = "100%";
background[0].style.backgroundColor = "pink";

var p = document.getElementsByTagName("p");
var logo = document.getElementsByClassName("logo");
var record = Array();
var record2 = Array();
var length = logo.length;

for (var i = 0; i < length; i++) {
    record[i] = p[i].innerHTML;
    record2[i] = logo[i].outerHTML;
}

function Random() {
    p = document.getElementsByTagName("p");
    logo = document.getElementsByClassName("logo");
    for (var i = 0; i < length; i++) {
        var random = Math.floor((Math.random() * length));
        var temp = p[i].innerHTML;
        p[i].innerHTML = p[random].innerHTML;
        p[random].innerHTML = temp;
        var temp = logo[i].outerHTML;
        logo[i].outerHTML = logo[random].outerHTML;
        logo[random].outerHTML = temp;
    }
}
function Sort() {
    var choice = prompt("Please decide your sorting types", "Ascending or Descending");
    p = document.getElementsByTagName("p");
    logo = document.getElementsByClassName("logo");
    var array = Array();
    for (var i = 0; i < length; i++) {
        array[i] = encodeURIComponent(p[i].innerHTML.charAt(0));
    }
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
                    var temp = logo[i].outerHTML;
                    logo[i].outerHTML = logo[j].outerHTML;
                    logo[j].outerHTML = temp;
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
                    var temp = logo[i].outerHTML;
                    logo[i].outerHTML = logo[j].outerHTML;
                    logo[j].outerHTML = temp;
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
    for (var i = 0; i < length; i++) {
        logo[i].outerHTML = record2[i];
    }
}
