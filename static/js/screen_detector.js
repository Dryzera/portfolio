var width_device = screen.availWidth
const element_display = document.getElementById("responsive")

const header = document.getElementById("top");
const header_scroll = document.getElementById("header-scroll")
const top_go = document.getElementById("back-to-top")

if (width_device < 1024 && width_device > 480) {
    element_display.style.display = "block"
}

window.addEventListener('scroll', function() {
    if (width_device >= 1024) {
        console.log(width_device)
    
        if (window.scrollY >= 1) {
            // console.log("A página foi scrollada e não está mais no ponto 0.");
            header.style.display = "none";
            header_scroll.style.display = "block";
            top_go.style.display = "block";
        } else {
            // console.log("A página está no topo.");
            header.style.display = "block";
            header_scroll.style.display = "none";
            top_go.style.display = "none";
        }
}
});
