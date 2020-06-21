const cards = document.querySelectorAll('.card');
const info = document.querySelector("#more_info");

for (let card of cards) {
    card.addEventListener("click", function () {
        const courseId = card.getAttribute("id");
        window.location.href = `/curso?id=${courseId}`
    });
}

info.addEventListener("click", function () {
    const courseId = document.querySelector(".card").getAttribute("id");
    window.open(`http://www.rocketseat.com.br/${courseId}`)
})
