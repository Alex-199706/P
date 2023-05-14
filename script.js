const agradecimiento = document.getElementById("agradecimiento");
const mensajeAdicional = document.getElementById("mensaje-adicional");

agradecimiento.addEventListener("click", function() {
  mensajeAdicional.style.display = "block";
});