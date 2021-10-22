function ligarDarkMode(){
    const principal = document.querySelector('main.principal')
    const rodaPe = document.querySelector('footer.rodape')
    const btnTema = document.querySelector('.principal .container a.btn')

    principal.classList.toggle('dark')
    rodaPe.classList.toggle('dark')
    btnTema.classList.toggle('dark')
}