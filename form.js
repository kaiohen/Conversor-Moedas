document.getElementById("form").addEventListener("submit", function (event) {
    // Impede de recarregar a pagina
  event.preventDefault();
  // obter valores de entrada informados pelo usuário
  const valor = parseFloat(document.getElementById("amount").value);
  const daMoeda = document.getElementById("daMoeda").value;
  const paraMoeda = document.getElementById("paraMoeda").value;
});