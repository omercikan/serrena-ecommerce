document.addEventListener("DOMContentLoaded", () => {
const degreeWrapper = document.querySelectorAll(".degrees-star .degree");
let activeDegree = null;

degreeWrapper.forEach(degree => {
    degree.addEventListener("click", () => {
        degreeWrapper.forEach(active => active.classList.remove("active"));
        degree.classList.add("active");
        activeDegree = degree;
    });
});

let reviewsWrapper = document.getElementById('reviewsWrapper');
let reviewsTxt = document.getElementById('reviewsTxt');
let reviewsNameInput = document.getElementById('reviewsNameInput');
let reviewsEmailInput = document.getElementById('reviewsEmailInput');
let reviewsSendBtn = document.getElementById('reviewsSendBtn');

reviewsSendBtn.addEventListener("click", (e) => {
    if(activeDegree) {
        const stars = activeDegree.querySelectorAll(".fa-star");
        let starsHtml = '';        
        stars.forEach(star => {
            starsHtml += '<i class="fa-solid fa-star" style="color: #ffd700"></i>'
        });

        if(reviewsTxt.value == "" || reviewsNameInput.value == "" || reviewsEmailInput.value == ""){
            let erorr = document.querySelector(".error-message");
            erorr.classList.add("active");

            setTimeout(() => {
                erorr.classList.remove("active");
            }, 3000);
        } else {
            let reviewsContent = `
                <li class="d-flex gap-2 pt-3 border-top">
                    <div class="reviews-img">
                        <img src="../img/user.png" alt="" width="60" height="60">
                    </div>
        
                    <div class="reviews-info">
                        <div class="stars d-flex">
                            ${starsHtml}
                        </div>
        
                        <p class="mt-1 mb-0"><span>${reviewsNameInput.value}</span> - ${new Date().toLocaleDateString()}</p>
                        <p>${reviewsTxt.value}</p>
                    </div>
                </li>
            `;
            reviewsWrapper.insertAdjacentHTML('beforeend', reviewsContent);
            e.preventDefault();
        }

        reviewsTxt.value = "";
        reviewsNameInput.value = "";
        reviewsEmailInput.value = "";
        let activeDegreee = document.querySelector(".degree.active");        
        activeDegreee.classList.remove("active");
    };
});
});
