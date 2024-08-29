window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if(category) {
        const activeFilter = document.querySelector(`.filters span[data-filter="${category}"]`);
        document.getElementById("currentInfo").textContent = category;
        document.title = `${category}, Ürünleri - Serrena`;
        if(activeFilter) {
            activeFilter.click();
        }
    } else {
        document.querySelector('.filters span[data-filter="all"]').click();
    };
});

let filters = document.querySelectorAll(".filters span");
let allProducts = {
    Erkek: document.querySelectorAll("#man"),
    Kadın: document.querySelectorAll("#woman"), 
    Çocuk: document.querySelectorAll("#child") 
}


//!CLICKED CATEGORY AND FILTERS PRODUCT
filters.forEach(filter => {
    filter.addEventListener("click", () => {
        const activeElement = document.querySelector("span.active").classList.remove("active");
        if(activeElement) {
            activeElement.classList.remove("active");
        }

        filter.classList.add("active");

        let filterKey = filter.dataset.filter

        for(let product in allProducts) {
            if(filterKey === 'all' || filterKey === product) {
                allProducts[product].forEach(product => product.style.display = 'block');
            } else {
                allProducts[product].forEach(product => product.style.display = 'none');
            };
        };
    });
});

