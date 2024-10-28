
<h1 align="center">Conversor de Moedas</h1>

![image](https://github.com/user-attachments/assets/0a47f245-9a83-4f94-81c3-e4f9f02383f0)


<br>


<p align="center">
  <a href="#descricao">Sobre</a> &#xa0; | &#xa0; 
  <a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#explicacao">Explicação</a> &#xa0; | &#xa0;
  <a href="https://github.com/kaiohen" target="_blank">Criador</a>
</p>

<br>

<h2 id="descricao">Descrição</h2>
<p>
Este projeto é uma ferramenta prática para realizar conversões rápidas e precisas entre as moedas Dólar (USD), Euro (EUR) e Real (BRL). Com uma interface intuitiva, é ideal para quem precisa verificar valores em diferentes moedas de forma ágil.
 
</p>

<h2 id="tecnologias">Tecnologias</h2>
<p>Tecnologias utilizadas para a criação do projeto:</p>
<ul>
  <li><img src="https://img.shields.io/badge/Bootstrap-purple?logo=bootstrap&logoColor=white&style=for-the-badge" alt="Bootstrap"></li>
  <li><img src="https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=CSS3" alt="CSS3"></li>
  <li><img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" alt="JavaScript"></li>
  <li><img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge" alt="HTML5"></li>
</ul>

<h2 id="explicacao">Explicação</h2>

~~~ JavaScript
document.getElementById("form").addEventListener("submit", function (event) {
    // Impede de recarregar a pagina
  event.preventDefault();
  // obter valores de entrada informados pelo usuário
  const valor = parseFloat(document.getElementById("amount").value);
  const daMoeda = document.getElementById("daMoeda").value;
  const paraMoeda = document.getElementById("paraMoeda").value;
~~~
O código impede o recarregamento da página quando o formulário é enviado; além disso, captura os valores inseridos pelo usuário.

~~~ JavaScript
  // definir taxas de cambio fixas
  const exchangeRates = {
    USD: { BRL: 5.7, EUR: 0.93 },
    BRL: { USD: 0.18, EUR: 0.16 },
    EUR: { USD: 1.08, BRL: 6.16 },
  };
~~~
O código organiza as taxas de câmbio em valores fixos, ao informar uma moeda de origem e a moeda para a qual deseja trocar.

~~~ JavaScript
 // Conversão simples de moedas
  let valorConvertido;
  if (daMoeda === paraMoeda) {
    valorConvertido = valor;
  } else {
    valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
  }
~~~
Caso seja feita uma conversão entre moedas do mesmo tipo, o valor permanece inalterado; se forem diferentes, a taxa é aplicada.

~~~ JavaScript
  const Conversão = document.getElementById("conversão");
  Conversão.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda} `;
});
~~~
Exibe o valor no HTML por meio do ID conversão, com duas casas decimais.

<br>
<a href="#top">Voltar ao topo</a>
