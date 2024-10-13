var width_device = screen.availWidth
const element_display = document.getElementById("responsive")

if (width_device < 1024) {
    console.log('menor')
    element_display.style.display = "block"
}