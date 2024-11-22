const itens_menu = document.getElementById('itens')

function openMenu() {
    if (itens_menu.style.display == 'block') {
        itens_menu.style.display = 'none'
    } else {
        itens_menu.style.display = 'block'
    }
}

function closeMenu() {
    itens_menu.style.display = 'none'
}