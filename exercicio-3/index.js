const botaoMudaCor = document.getElementById('btn-muda-cor')
const primeiroQuadrado = document.getElementsByClassName('quadrado-azul')

function mudarCorDeFundo () {
    botaoMudaCor.addEventListener('click', () => {
        if (primeiroQuadrado[0].classList.value === 'quadrado-azul'){
            primeiroQuadrado[0].classList.add('quadrado-amarelo')
            primeiroQuadrado[0].classList.remove('quadrado-azul')
        }
    })
}

mudarCorDeFundo()