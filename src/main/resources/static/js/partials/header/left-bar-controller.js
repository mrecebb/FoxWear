function openLeftBar() {
    document.querySelector("header .left").style.left = "0";

    document.querySelector("header > .overlay").style.opacity = "1";
    document.querySelector("header > .overlay").style.pointerEvents = "auto";
}

function closeLeftBar() {
    document.querySelector("header .left").style.left = "calc(0px - var(--left-bar-width))";

    document.querySelector("header > .overlay").style.opacity = "0";
    document.querySelector("header > .overlay").style.pointerEvents = "none";
}