function calcularAreaEPerimetroCirculo() {
  const raio = parseFloat(prompt("Digite o raio do círculo:"));
  
  const area = Math.PI * Math.pow(raio, 2);
  const perimetro = 2 * Math.PI * raio;

  console.log(`Área do círculo: ${area.toFixed(2)}`);
  console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
  alert(`Área do círculo: ${area.toFixed(2)}\nPerímetro do círculo: ${perimetro.toFixed(2)}`);
}

calcularAreaEPerimetroCirculo();