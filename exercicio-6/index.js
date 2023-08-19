const inputs = document.querySelectorAll('input');

inputs.forEach(element => {
    addEventListener('change', ()=>{
        if (element.value !== ''){
            element.classList.add('borda-verde')
        }else {
            element.classList.remove('borda-verde')
        }
    })
});