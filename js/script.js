const track = document.querySelector('.carrossel-track')
const botaoProximo = document.querySelector('.proximo')
const botaoAnterior = document.querySelector('.anterior')
const cards = document.querySelectorAll('.card')

let indiceAtual = 0

function moverCarrossel() {
    const larguraCard = cards[0].offsetWidth
    track.style.transform = `translateX(-${indiceAtual * larguraCard}px)`
}

botaoProximo.addEventListener('click', function() {
    if (indiceAtual < cards.length - 1) {
        indiceAtual++
    }
    moverCarrossel()
})

botaoAnterior.addEventListener('click', function() {
    if (indiceAtual > 0) {
        indiceAtual--
    }
    moverCarrossel()
})