let popA = 80000;
let popB = 200000;
const taxaA = 0.03;
const taxaB = 0.015;
let anos = 0;

while (popA < popB) {
  popA += popA * taxaA;
  popB += popB * taxaB;
  anos++;
}

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
alert(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);