setPage = page => {
    document.getElementById(page).style.setProperty("background-color", "#bff000");
    document.getElementById(page).style.setProperty("color", "black");
    // document.getElementById(page).style.setProperty("border-radius", "50px");
}

setPage(new URLSearchParams(window.location.search).get("page"));
