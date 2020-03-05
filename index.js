const elements = document.querySelectorAll(".switchLang");
const btn = document.querySelectorAll(".enBtn, .jaBtn");
let text;

// Show English Initially
document.addEventListener("DOMContentLoaded", function() {
    showEn();
});

// Display Selected Language
btn.forEach(element => element.addEventListener("click", setLanguage));

function setLanguage(e) {
    let lang = e.target.name;

    // Change Lang attribute
    document.getElementById("language").lang = e.target.name;

    // Display Selected Language
    if (lang === "en") {
        showEn();
    } else {
        showJa();
    }
}

// Show English
function showEn() {
    elements.forEach(function(item, index) {
        text = item.getAttribute("data-i18n");
        elements[index].innerHTML = text;
    });
}

// Show Japanese
function showJa() {
    elements.forEach(function(item, index) {
        text = item.getAttribute("data-i18n-ja");
        elements[index].innerHTML = text;
    });
}

// jQuery Event Triggers
$(document).ready(function() {
    // Navbar Trigger
    $(".sidenav").sidenav({
        preventScrolling: false
    });

    // Parallax
    $(".parallax").parallax();

    // Tooltips
    $(".tooltipped").tooltip();

    // Scrollspy
    $(".scrollspy").scrollSpy({
        scrollOffset: 0
    });
});

// Get the current year
document.getElementById("year").innerHTML = new Date().getFullYear();
