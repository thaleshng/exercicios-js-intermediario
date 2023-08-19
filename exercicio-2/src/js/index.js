const faqs = document.querySelectorAll('.faq')
const setaAberta = document.querySelectorAll('#seta-aberta')

faqs.forEach(function(item, index){
    const paragrafos = item.querySelectorAll('.faq-description');
    paragrafos.forEach(function (p) {
        item.addEventListener("click", function(){
            const faqAtual = document.querySelectorAll('.mostrar')
            faqAtual.forEach(function(faq){
                faq.classList.remove('mostrar')
                faq.classList.add('esconder')
            })
            p.classList.remove('esconder')
            p.classList.add('mostrar')
            setaAberta[index].classList.add('mostrar')

            faqAtual.forEach(function(faq){
                faq.classList.remove('mostrar')
                faq.classList.add('esconder')
            })
                        
        })
    })
})