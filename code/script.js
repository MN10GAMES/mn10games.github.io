// JavaScript source code

var score = 1000;
var goal = 3500;
var bonus = 250;
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

    if (score >= goal) {
        document.getElementById("bonus").style.display = "flex";
        document.getElementById("header").style.opacity = ".25";
        document.getElementById("newsletter").style.opacity = ".25";
        document.getElementById("contacts").style.opacity = ".25";
        document.getElementById("footer").style.opacity = ".25";

        for (const i of document.getElementsByClassName("Full_Page")) {
            i.style.opacity = ".25";
        }
    }
}

function close_overlay() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("newsletter").style.opacity = "1";
    document.getElementById("contacts").style.opacity = "1";
    document.getElementById("footer").style.opacity = "1";

    for (const i of document.getElementsByClassName("Full_Page")) {
        i.style.opacity = "1";
    }

    score += bonus;
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

function scoring() {
    if (score < goal) {
        score += bonus;
        document.getElementById("score").innerHTML = "SCORE : " + score + " / " + goal;
        document.body.classList.add('Sparkles')

        if (scrollTimer != -1)
            clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout("scrollFinished()", 100);
    }
}

function show_pp() {
    document.getElementById("privacy_policy").style.display = "flex";
    document.getElementById("newsletter").style.opacity = ".25";
    document.getElementById("contacts").style.opacity = ".25";

    score += bonus;
    document.getElementById("score").innerHTML = "SCORE : " + score + " / " + goal;
    document.body.classList.add('Sparkles')

    if (scrollTimer != -1)
        clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout("scrollFinished()", 250);
}

function close_pp() {
    document.getElementById("privacy_policy").style.display = "none";
    document.getElementById("newsletter").style.opacity = "1";
    document.getElementById("contacts").style.opacity = "1";

    score += bonus;
    document.getElementById("score").innerHTML = "SCORE : " + score + " / " + goal;
    document.body.classList.add('Sparkles')

    if (scrollTimer != -1)
        clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout("scrollFinished()", 250);
}

