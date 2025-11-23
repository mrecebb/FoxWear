function openLeftBar() {
    document.querySelector(".menu-bar .left").style.left = "0";

    document.querySelector(".menu-bar > .overlay").style.opacity = "1";
    document.querySelector(".menu-bar > .overlay").style.pointerEvents = "auto";
}

function closeLeftBar() {
    document.querySelector(".menu-bar .left").style.left = "calc(0px - var(--left-bar-width))";

    document.querySelector(".menu-bar > .overlay").style.opacity = "0";
    document.querySelector(".menu-bar > .overlay").style.pointerEvents = "none";
}