/* GUARDAR ESTADO COLUMNA ACTIVA */
let cardActiva = 1

/* SELECCIONAR COLUMNAS */
const cards = document.querySelectorAll(".card")

/* ESCUCHAR CLICS EN CADA COLUMNA */
cards.forEach((card, indice) => {
    card.addEventListener("click", function() {
        cambiarCard(indice)
    })
})

/* CAMBIAR ESTADO DE LAS COLUMNAS */
function cambiarCard(indice) {
    cards[cardActiva].classList.remove("activa")
    cards[indice].classList.add("activa")
    cardActiva = indice
}