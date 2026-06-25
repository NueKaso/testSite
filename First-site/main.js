

const buttonlist = document.querySelectorAll(".buttonY")

const NoButton = document.querySelector(".buttonN")


function escape(e){
    const card = e.target.closest(".card");

    const maxX = card.clientWidth - e.target.clientWidth - 40; // 40 — это padding карточки 
    const maxY = card.clientHeight - e.target.clientHeight - 40;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    e.target.style.left = randomX + "px";
    e.target.style.top = randomY + "px";




}

buttonlist.forEach((item) => {

    item.addEventListener("mouseover", escape)
})

NoButton.addEventListener("click",() => {
    window.location.href = "./Win.html"
})