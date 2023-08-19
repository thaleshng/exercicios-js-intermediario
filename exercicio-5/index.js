const botao = document.querySelector("a[class='btn']")
const quadrado = document.querySelector("div[class='quadrado preto']")

botao.addEventListener('click', adicionarClasse)

function adicionarClasse(){
    if(quadrado.classList.contains('preto')){
        quadrado.classList.add('azul')
        quadrado.classList.remove('preto')
    }else if(quadrado.classList.contains('azul')){
        quadrado.classList.add('preto')
        quadrado.classList.remove('azul')
    }
}