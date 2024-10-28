const objClicked = document.getElementById('btn-links')
const menuLinks = document.getElementById('links-top-mobile')

objClicked.onclick = function() {
    menuLinks.style.display = 'block';
    console.log('oi')

    objClicked.onclick = function() {
        menuLinks.style.display='none';
    }
}