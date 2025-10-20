function cliquePagina() {
        const el = document.querySelectorAll('.menu_navegacao ul a')
        el.forEach(function (link){
            link.addEventListener('click', e => {
                e.preventDefault()
            })
        })
    }
    cliquePagina()


function botaoVoltar() {
    const el = document.querySelector('sidebar-voltar a')
        sidebar-voltar.addEventListener('click', e => {
            e.preventDefault()
    const idDoAlvo = sidebar-voltar.getAttribute('href')
    const secaoAlvo = document.querySelector(idDoAlvo)
    secaoAlvo.scrollIntoView({behavior: 'smooth'}) 
    })
}