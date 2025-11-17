function openLogin() {
    document.getElementById("login-popup").style.opacity = "1";
    document.getElementById("login-popup").style.pointerEvents = "auto";

    document.querySelector("#login-popup .overlay").style.opacity = "1";
    document.querySelector("#login-popup .overlay").style.pointerEvents = "auto";

    document.querySelector("#login-popup .content").style.backdropFilter = "blur(10px)";
}

function closeLogin() {
    document.getElementById("login-popup").style.opacity = "0";
    document.getElementById("login-popup").style.pointerEvents = "none";

    document.querySelector("#login-popup .overlay").style.opacity = "0";
    document.querySelector("#login-popup .overlay").style.pointerEvents = "none";

    document.querySelector("#login-popup .content").style.backdropFilter = "blur(0px)";
}