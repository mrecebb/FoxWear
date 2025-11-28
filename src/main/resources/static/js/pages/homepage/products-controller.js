const leftButton = document.querySelector(".content-homepage .content-products .products .left-button");

const rightButton = document.querySelector(".content-homepage .content-products .products .right-button");

const productsBar = document.querySelector(
    ".products-bar"
);

const productWidth = document.querySelector(".product").offsetWidth + 50;

function goLeft() {
    productsBar.scrollBy({left: -productWidth, behavior: "smooth"});
}

function goRight() {
    productsBar.scrollBy({left: productWidth, behavior: "smooth"});
}

leftButton.addEventListener("click", () => {
        goLeft();
});

rightButton.addEventListener("click", () => {
    goRight();
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        goLeft();
    }

    if (event.key === "ArrowRight") {
        goRight();
    }
})