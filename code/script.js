// JavaScript source code

var score = 1000;
var goal = 2000;
var scrollTimer = -1;

window.onscroll = function () {
    if (score < goal) {
        score += 1;
        document.getElementById("score").innerHTML = "SCORE : " + score + " / " + goal;
        document.body.classList.add('Sparkles')

        if (scrollTimer != -1)
            clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout("scrollFinished()", 100);
    }

}

function scrollFinished() {
    document.body.classList.remove('Sparkles')
    document.getElementById("Pages_MyGames").style.removeProperty("background-color");
    document.getElementById("Pages_AboutMe").style.removeProperty("background-color");
    document.getElementById("Pages_MyApps").style.removeProperty("background-color");
    document.getElementById("Pages_ContactMe").style.removeProperty("background-color");
}

function close_overlay() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("header").style.opacity = "1";

    for (const i of document.getElementsByClassName("Full_Page")) {
        i.style.opacity = "1";
    }

    score += 250;
    document.getElementById("score").innerHTML = "SCORE : " + score + " / " + goal;
    document.body.classList.add('Sparkles')

    if (scrollTimer != -1)
        clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout("scrollFinished()", 250);
}

function select_about_me() {
    document.getElementById("Pages_AboutMe").style.backgroundColor = "#30BFA7";
    document.getElementById("Pages_MyGames").style.removeProperty("background-color");
    document.getElementById("Pages_MyApps").style.removeProperty("background-color");
    document.getElementById("Pages_ContactMe").style.removeProperty("background-color");
}

function select_my_games() {
    document.getElementById("Pages_MyGames").style.backgroundColor = "#30BFA7";
    document.getElementById("Pages_AboutMe").style.removeProperty("background-color");
    document.getElementById("Pages_MyApps").style.removeProperty("background-color");
    document.getElementById("Pages_ContactMe").style.removeProperty("background-color");
}

function select_my_apps() {
    document.getElementById("Pages_MyApps").style.backgroundColor = "#30BFA7";
    document.getElementById("Pages_MyGames").style.removeProperty("background-color");
    document.getElementById("Pages_AboutMe").style.removeProperty("background-color");
    document.getElementById("Pages_ContactMe").style.removeProperty("background-color");
}

function select_contact_me() {
    document.getElementById("Pages_ContactMe").style.backgroundColor = "#30BFA7";
    document.getElementById("Pages_MyGames").style.removeProperty("background-color");
    document.getElementById("Pages_MyApps").style.removeProperty("background-color");
    document.getElementById("Pages_AboutMe").style.removeProperty("background-color");
}