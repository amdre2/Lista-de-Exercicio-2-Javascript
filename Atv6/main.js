function calcularRetornoInvestimento() {
  const capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
  const taxaJurosMensal = parseFloat(prompt("Digite a taxa de juros mensal (em %):"));
  const tempoMeses = parseInt(prompt("Digite o tempo do investimento (em meses):"));

  const taxaDecimal = taxaJurosMensal / 100;
  const montante = capitalInicial * Math.pow((1 + taxaDecimal), tempoMeses);
  
  console.log(`O retorno do investimento (montante) será de R$ ${montante.toFixed(2)}`);
  alert(`O retorno do investimento (montante) será de R$ ${montante.toFixed(2)}`);
}

calcularRetornoInvestimento();