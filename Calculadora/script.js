// Seleciona o visor da calculadora
const display = document.getElementById("display");

// Seleciona todos os botões
const botoes = document.querySelectorAll("button");

// Variáveis para armazenar os valores e a operação
let valorAtual = "";
let valorAnterior = "";
let operacao = "";

// Adiciona evento de clique em cada botão
botoes.forEach(function(botao) {
  botao.addEventListener("click", function() {
    const texto = botao.textContent;

    // Se for número ou vírgula
    if (botao.classList.contains("numero")) {
      if (texto === ",") {
        if (!valorAtual.includes(".")) valorAtual += ".";
      } else {
        valorAtual += texto;
      }
      display.textContent = valorAtual;
    }

    // Se for operador
    else if (botao.classList.contains("operador")) {
      if (texto === "=") {
        calcular(); // realiza o cálculo
      } else {
        operacao = texto;
        valorAnterior = valorAtual;
        valorAtual = "";
      }
    }

    // Botão AC (limpar tudo)
    else if (texto === "AC") {
      valorAtual = "";
      valorAnterior = "";
      operacao = "";
      display.textContent = "0";
    }

    // Botão ± (inverter sinal)
    else if (texto === "±") {
      valorAtual = String(parseFloat(valorAtual) * -1);
      display.textContent = valorAtual;
    }

    // Botão % (porcentagem)
    else if (texto === "%") {
      valorAtual = String(parseFloat(valorAtual) / 100);
      display.textContent = valorAtual;
    }
  });
});

// Função para realizar o cálculo
function calcular() {
  const a = parseFloat(valorAnterior);
  const b = parseFloat(valorAtual);
  let resultado = 0;

  switch (operacao) {
    case "+": resultado = a + b; break;
    case "−": resultado = a - b; break;
    case "×": resultado = a * b; break;
    case "÷": resultado = b !== 0 ? a / b : "Erro"; break;
  }

  display.textContent = resultado;
  valorAtual = String(resultado);
  valorAnterior = "";
  operacao = "";
}
