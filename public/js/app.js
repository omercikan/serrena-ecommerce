let searchIcon = document.getElementById("searchIcon");
let searchBox = document.querySelector(".search-box");
let searchBoxContainer = document.querySelector(".search-box-container");
let responsiveMenuIcon = document.getElementById("responsiveMenuIcon");

//!SEARCH ICON CLICKED AND OPENED SEARCH BOX AND AFTER THREE SECONDS OPENED MODAL BOX
searchIcon.addEventListener("click", (e) => {
    e.stopPropagation()
    if(!searchBox.classList.contains("open") && !searchBoxContainer.classList.contains("open")) {
        searchBox.classList.add("open")
        searchBoxContainer.classList.add("open")
        document.querySelector("body").style.overflow = "hidden";
    } 
});

searchBoxContainer.addEventListener("click", (e) => {
    e.stopPropagation()
});

document.addEventListener("click", () => {
    if(searchBox.classList.contains("open") && searchBoxContainer.classList.contains("open")) {
        searchBox.classList.remove("open")
        searchBoxContainer.classList.remove("open")
        document.querySelector("body").style.overflow = "auto";
    } 

    document.querySelector(".main-modal").classList.remove("open");
    document.querySelector(".main-modal-container").classList.remove("open");
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".main-modal").classList.add("open");
        document.querySelector(".main-modal-container").classList.add("open");
    }, 3000);

    document.querySelector('.modal-close').addEventListener("click", (e) =>{
        e.stopPropagation();
        document.querySelector(".main-modal").classList.remove("open");
        document.querySelector(".main-modal-container").classList.remove("open");
    });

    let modalEmailInput = document.getElementById("modalEmailInput");
    let modalBtn = document.getElementById("modalBtn");
    let resultMessage = document.getElementById("resultMessage");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    modalBtn.addEventListener("click", emailVerification);
    modalEmailInput.addEventListener("keydown", (e) => {
        if(e.key == "Enter") {
            emailVerification();
        }
    });

    function emailVerification(e) {
        e.preventDefault();
        let globalMessage = document.querySelector(".error-message");
        const email = modalEmailInput.value.trim();
        const result = emailRegex.test(email); 

        if(email == "" || !email.trim()) {
            resultMessage.textContent = 'E-posta adresi boş olamaz!'
            modalEmailInput.style.borderColor = '#e51414'
        } else if(result) {
            resultMessage.textContent = ''
            modalEmailInput.style.borderColor = '#198754'
            globalMessage.classList.add("active");
            globalMessage.querySelector("p").textContent = 'Aboneliğiniz alınmıştır.'
            globalMessage.querySelector("p").style.backgroundColor = 'rgb(65, 112, 232)'
            globalMessage.querySelector("p").style.color = '#fff'

            setTimeout(() => {
                globalMessage.classList.remove("active");
                document.querySelector(".main-modal").classList.remove("open");
                document.querySelector(".main-modal-container").classList.remove("open");
            }, 3000);
        } else {
            resultMessage.textContent = 'Geçerli bir E-posta adresi giriniz!'
            modalEmailInput.style.borderColor = '#e51414'
        }
    }
    
});

document.querySelector(".main-modal-container").addEventListener("click", (e) => {
    e.stopPropagation();
})

//!HAMBURGER MENU CLICKED AND OPENED RESPONSIVE MENU AND ANIMETED TOGGLE
responsiveMenuIcon.addEventListener("click", () => {
    document.querySelector(".hamburger-menu").classList.toggle("open")
    document.querySelector(".main-home__responsive-nav").classList.toggle("responsive")
});

//!TARGETS THE CLICKED BUTTON AND ADDS THE PRODUCTS TO THE HTML FILE
let shoppingBtn = document.querySelectorAll(".white-btn");

shoppingBtn.forEach(shopping => {
    shopping.addEventListener("click", (e) => {
        e.preventDefault();
        const imgUrl = shopping.getAttribute("data-image");
        const productText = shopping.getAttribute("data-description");
        const productPrice = shopping.getAttribute("data-price");

        window.location.href = `product.html?image=${encodeURIComponent(imgUrl)}&desc=${encodeURIComponent(productText)}&price=${encodeURIComponent(productPrice)}`;
    });
});

let NavlinkGroups = document.querySelectorAll("#NavlinkGroups a");
NavlinkGroups.forEach(links => {
    links.addEventListener("click", (e) => {
        let category = e.target.textContent;
        window.location.href = `shop.html?category=${category}`;
    })
});