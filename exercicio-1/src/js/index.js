const slider = document.querySelectorAll('.slider .slide');
const setaAvancar = document.getElementById('seta-avancar');
const setaVoltar = document.getElementById('seta-voltar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', function() {
    if(imagemAtual === slider.length -1) {
        return;
    }

    imagemAtual ++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
})

setaVoltar.addEventListener('click', function() {
    if(imagemAtual === 0) {
        return;
    }

    imagemAtual --;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
})

function esconderImagemAberta(){
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}

function mostrarImagem(){
    slider[imagemAtual].classList.add('mostrar')
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove('opacidade');
    }else{
        setaVoltar.classList.add('opacidade');
    }

    const chegouNaUltimaImagen = imagemAtual !== 0 && imagemAtual === slider.length - 1;
    if(chegouNaUltimaImagen){
        setaAvancar.classList.add('opacidade');
    }else{
        setaAvancar.classList.remove('opacidade')
    }
}

