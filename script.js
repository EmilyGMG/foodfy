const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.cards-receita')

for(let card of cards) {
  card.addEventListener("click", function() {

    const cardId = card.getAttribute("id")
    const titleId = card.querySelector('.title-cards').textContent
    const autorId = card.querySelector('.autor-cards').textContent

    modalOverlay.classList.add('active')
    modalOverlay.querySelector("img").src = `/assets/${cardId}.png`
    modalOverlay.querySelector("img").alt = `${cardId}`
    modalOverlay.querySelector("h1").innerHTML = titleId
    modalOverlay.querySelector("h2").innerHTML = autorId
  })
}


document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active")
})