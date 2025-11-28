const leftArrow = document.querySelector(".content-homepage .content-review .review-buttons .left-button");
const rightArrow = document.querySelector(".content-homepage .content-review .review-buttons .right-button");

const reviewWrapper = document.querySelector(".content-homepage .content-review .review-wrapper");

let reviewWidth = document.querySelector(".review").offsetWidth + 50;

leftArrow.addEventListener("click", () => {
    reviewWrapper.scrollBy({left: -reviewWidth, behavior: "smooth"});
});

rightArrow.addEventListener("click", () => {
    reviewWrapper.scrollBy({left: reviewWidth, behavior: "smooth"});
})