var width_device = screen.availWidth
const element_display = document.getElementById("responsive")

if (width_device < 1024) {
    element_display.style.display = "block"
}