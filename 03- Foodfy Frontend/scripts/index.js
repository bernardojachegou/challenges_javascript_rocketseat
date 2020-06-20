const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll(".card");

document.querySelector(".close_modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
});


for (let card of cards) {
    card.addEventListener("click", function () {
        modalOverlay.classList.add("active");
        const imageId = card.querySelector("img").getAttribute("src");
        modalOverlay.querySelector("img").src = `${imageId}`;

        const titleId = card.querySelector("h3").textContent;
        modalOverlay.querySelector("h1").textContent = `${titleId}`;

        const authorName = card.querySelector("#author_name").textContent;
        modalOverlay.querySelector("p").textContent = `${authorName}`;

    });
}

