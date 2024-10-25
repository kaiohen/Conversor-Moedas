document.getElementById("form").addEventListener("submit", function (event) {
    // Impede de recarregar a pagina
  event.preventDefault();
  // obter valores de entrada informados pelo usuário
  const valor = parseFloat(document.getElementById("amount").value);
  const daMoeda = document.getElementById("daMoeda").value;
  const paraMoeda = document.getElementById("paraMoeda").value;

  // definir taxas de cambio fixas
  const exchangeRates = {
    USD: { BRL: 5.7, EUR: 0.93 },
    BRL: { USD: 0.18, EUR: 0.16 },
    EUR: { USD: 1.08, EUR: 6.16 },
  };
  // Conversão simples de moedas
  let valorConvertido;
  if (daMoeda === paraMoeda) {
    valorConvertido = valor;
  } else {
    valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
  }

  const Conversão = document.getElementById("conversão");
  Conversão.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda} `;
});
