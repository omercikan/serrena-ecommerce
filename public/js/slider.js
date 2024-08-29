let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let sliderRow = document.querySelector(".sliders-row");
let clickCounter = 0;

//!SLIDERS NEXT EVENT
nextBtn.addEventListener("click", (e) => {
    sliderEvent(e);
});

//!SLIDERS PREV EVENT
prevBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(clickCounter > 0) {
        clickCounter--
        sliderRow.style.transform = `translateX(${sliderRow.computedStyleMap().get("transform")[0].x.value + 308}px)`;
    }
});

function sliderEvent(e = null) {
    if(e) e.preventDefault();

    clickCounter++;
    const sliderItem = sliderRow.querySelectorAll("img").length +1;
    const widthRatio = Math.floor(window.innerWidth / 308);    

    if(sliderItem - (8 + clickCounter) + (8 - widthRatio) >= 0) {
        sliderRow.style.transform = `translateX(${sliderRow.computedStyleMap().get("transform")[0].x.value - 308}px)`
    } else {
        sliderRow.style.transform = `translateX(0px)`
        clickCounter++;
        clickCounter = 0;
    }
};

setInterval(() => {
    sliderEvent();
}, 3000);