// Pega os elementos da página
const modalAcademia = document.getElementById("modalAcademia");
const openModalAcademia = document.getElementById("openModalAcademia");
const closeModalAcademia = document.getElementById('closeModalAcademia')

const modalInformatica = document.getElementById("modalInformatica");
const openModalInformatica = document.getElementById("openModalInformatica");
const closeModalInformatica = document.getElementById('closeModalInformatica')

const modalFront = document.getElementById("modalFront");
const openModalFront = document.getElementById("openModalFront");
const closeModalFront = document.getElementById('closeModalFront')

// abrir modal
openModalAcademia.onclick = function() {
    modalAcademia.style.display = "flex";
}

openModalInformatica.onclick = function() {
    modalInformatica.style.display = "flex";
}

openModalFront.onclick = function() {
    modalFront.style.display = "flex";
}


// fechar modal

closeModalAcademia.onclick = function() {
    modalAcademia.style.display = "none";
}

closeModalInformatica.onclick = function() {
    modalInformatica.style.display = "none";
}

closeModalFront.onclick = function() {
    modalFront.style.display = "none";
}
