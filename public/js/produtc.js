//!PRODUCT IMAGE AND DESCRIPTION AND PRICE SHOWED
document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const imgUrl = urlParams.get('image');
    const description = urlParams.get('desc');
    const price = urlParams.get("price");

    if(imgUrl) {
        const productImg = document.getElementById('productsImg');
        productImg.src =  imgUrl;
    }

    if(description) {
        const productDesc = document.getElementById("productDesc");
        const productDescResponsive = document.getElementById("productDescResponsive");
        let reviewsTitle = document.getElementById('reviewsTitle');
        let reviewsSendBtn = document.getElementById('reviewsSendBtn');
        let reviewsWrapper = document.querySelector('#reviewsWrapper').children.length;
        document.title = `${description} Fiyatı, Yorumları - Serrena`
        
        reviewsSendBtn.addEventListener("click", () => {
            reviewsTitle.textContent = `${productDesc.textContent} için ${reviewsWrapper+=1} inceleme`
        });
        
        productDesc.textContent = description
        reviewsTitle.textContent = `${productDesc.textContent} için ${reviewsWrapper} inceleme`
        productDescResponsive.textContent = description;
    }

    if(price) {
        const productPrice = document.getElementById("productPrice");
        productPrice.textContent = price;
    }
});

//!PRODUCT PREVIEW IMAGE CLICK AND PLACE TO MAIN IMAGE
let productPreviewImages = document.querySelectorAll(".product-preview img");
productPreviewImages.forEach(images => {
    images.addEventListener("click", (e) => {
        let productImg = document.getElementById('productsImg');
        productImg.src = e.target.src
        window.scrollTo({top: 150})
    });
});

//!PRODUCT COLOR OPTIONS AND FOCUS THE ACTIVE CLASS
let colorsWrapper = document.querySelectorAll(".colors-group label");
for(let color of colorsWrapper) {
    color.addEventListener("click", function(){
        document.querySelector("label.active").classList.remove("active");
        color.classList.add("active");
    });    
}

//!PRODUCT SIZE OPTIONS AND FOCUS THE ACTIVE CLASS
let sizeSWrapper = document.querySelectorAll(".size-group span");
for(let size of sizeSWrapper) {
    size.addEventListener("click", function(){
        document.querySelector("span.active").classList.remove("active");
        size.classList.add("active");
    });
}

//!DEGREE CLICKED AND FOCUS THE ACTIVE CLASS
let degreeWrapper = document.querySelectorAll(".degrees-star .degree");
degreeWrapper.forEach(degree => {
    degree.addEventListener("click", () => {
        degreeWrapper.forEach(active => active.classList.remove("active"));
        degree.classList.add("active");
    });
});