const header = document.getElementById("top");
const header_scroll = document.getElementById("header-scroll")
const top_go = document.getElementById("back-to-top")

window.addEventListener('scroll', function() {
    
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
});
