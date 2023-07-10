var currnetPage = "home";

setPage = page => {
    currnetPage = page;
    document.getElementById(page).style.setProperty("background-color", "#bff000");
    document.getElementById(page).style.setProperty("color", "black");
}

highlightLink = page => {
    if (currnetPage != page) {
        document.getElementById(page).style.setProperty("background-color", "red");
    }
}

resetHighlighting = page => {
    if (currnetPage != page) {
        document.getElementById(page).style.setProperty("background-color", "black");
    }
}

setPage(new URLSearchParams(window.location.search).get("page"));
