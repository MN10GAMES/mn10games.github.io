// JavaScript source code

var score = 1000;
var scrollTimer = -1;

window.onscroll = function () {
    score += 1;
    document.getElementById("score").innerHTML = "SCORE : " + score;
    document.body.classList.add('Sparkles')

    if (scrollTimer != -1)
        clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout("scrollFinished()", 100);
}

function scrollFinished() {
    document.body.classList.remove('Sparkles')
}

function close_overlay() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("header").style.opacity = "1";

    for (const i of document.getElementsByClassName("Full_Page")) {
        i.style.opacity = "1";
    }

    score += 500;
    document.getElementById("score").innerHTML = "SCORE : " + score;
    document.body.classList.add('Sparkles')

    if (scrollTimer != -1)
        clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout("scrollFinished()", 250);
}