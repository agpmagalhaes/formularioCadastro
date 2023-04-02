const necessidadeEspecial = document.getElementById("necessidade");
const definirnecessidade = document.getElementById("definir-necessidade");

necessidadeEspecial.addEventListener("change", function() {
    if (necessidadeEspecial.checked){
        definirnecessidade.style.display = "block";
    } else {
        definirnecessidade.style.display = "none";
    }
});