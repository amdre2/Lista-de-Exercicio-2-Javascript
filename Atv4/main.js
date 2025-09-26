function calcularSalarioAtual() {
  const salarioInicial = parseFloat(prompt("Informe o salário inicial do funcionário:"));
  let salario = salarioInicial;
  let percentualAumento = 0.0015;

  salario += salario * percentualAumento;

  for (let ano = 1997; ano <= 2025; ano++) {
    percentualAumento *= 2;
    salario += salario * percentualAumento;
  }

  console.log(`O salário atual do funcionário é R$ ${salario.toFixed(2)}`);
  alert(`O salário atual do funcionário é R$ ${salario.toFixed(2)}`);
}

calcularSalarioAtual();