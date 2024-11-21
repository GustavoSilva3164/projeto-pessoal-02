function iniciarPrograma() {
  const option = prompt("Você gostaria de fazer um cálculo ou aprender sobre as fórmulas? Digite 'calculo' para calcular ou 'aprender' para aprender mais sobre.");

  if (option.toLowerCase() === 'calculo') {
      escolherCalculo();
  } else if (option.toLowerCase() === 'aprender') {
      escolherAprendizado();
  } else {
      alert("Opção inválida. Por favor, digite 'calculo' ou 'aprender'.");
  }
}

function escolherCalculo() {
  const chosenCalculation = prompt("Escolha um cálculo: 'bhaskara', 'juros simples', 'juros compostos', 'equacao', 'area/perimetro'.");

  switch (chosenCalculation.toLowerCase()) {
      case 'bhaskara':
          const a = parseFloat(prompt("Digite o valor de a:"));
          const b = parseFloat(prompt("Digite o valor de b:"));
          const c = parseFloat(prompt("Digite o valor de c:"));
          const bhaskaraResult = bhaskara(a, b, c);
          alert("Resultado: x1 = " + bhaskaraResult.x1 + ", x2 = " + bhaskaraResult.x2);
          break;

      case 'juros simples':
          const principalJS = parseFloat(prompt("Digite o capital inicial:"));
          const rateJS = parseFloat(prompt("Digite a taxa de juros (em decimal):"));
          const timeJS = parseFloat(prompt("Digite o tempo:"));
          const simpleInterestResult = jurosSimples(principalJS, rateJS, timeJS);
          alert("Juros: " + simpleInterestResult.juros + ", Montante: " + simpleInterestResult.montante);
          break;

      case 'juros compostos':
          const principalJC = parseFloat(prompt("Digite o capital inicial:"));
          const rateJC = parseFloat(prompt("Digite a taxa de juros (em decimal):"));
          const timeJC = parseFloat(prompt("Digite o tempo:"));
          const compoundInterestResult = jurosCompostos(principalJC, rateJC, timeJC);
          alert("Juros: " + compoundInterestResult.juros + ", Montante: " + compoundInterestResult.montante);
          break;

      case 'equacao':
          const coefA = parseFloat(prompt("Digite o valor de a:"));
          const coefB = parseFloat(prompt("Digite o valor de b:"));
          const equationResult = equacaoPrimeiroGrau(coefA, coefB);
          alert("Resultado: x = " + equationResult);
          break;

      case 'area/perimetro':
          const shape = prompt("Escolha uma figura: 'retangulo', 'triangulo', 'circulo'.");
          if (shape === 'retangulo') {
              const width = parseFloat(prompt("Digite a base do retângulo:"));
              const height = parseFloat(prompt("Digite a altura do retângulo:"));
              alert("Área: " + areaRetangulo(width, height) + ", Perímetro: " + perimetroRetangulo(width, height));
          } else if (shape === 'triangulo') {
              const baseT = parseFloat(prompt("Digite a base do triângulo:"));
              const heightT = parseFloat(prompt("Digite a altura do triângulo:"));
              alert("Área: " + areaTriangulo(baseT, heightT));
          } else if (shape === 'circulo') {
              const radius = parseFloat(prompt("Digite o raio do círculo:"));
              alert("Área: " + areaCirculo(radius) + ", Perímetro: " + perimetroCirculo(radius));
          } else {
              alert("Figura inválida.");
          }
          break;

      default:
          alert("Cálculo inválido.");
  }
}

function escolherAprendizado() {
  const tema = prompt("O que você gostaria de aprender? Escolha um número:\n1 - Fórmula de Bhaskara\n2 - Juros Simples\n3 - Juros Compostos\n4 - Equação de 1º Grau\n5 - Área e Perímetro de Figuras Geométricas");

  switch (tema) {
      case '1':
          alert("A fórmula de Bhaskara é usada para resolver equações quadráticas (do segundo grau) e envolve calcular o discriminante (delta) para encontrar as raízes da equação.");
          break;

      case '2':
          alert("Juros simples é uma fórmula usada para calcular o rendimento baseado em uma taxa fixa. É calculado multiplicando o capital, a taxa e o tempo.");
          break;

      case '3':
          alert("Juros compostos calculam o rendimento sobre o montante acumulado, não apenas sobre o capital inicial. O montante cresce exponencialmente ao longo do tempo.");
          break;

      case '4':
          alert("A equação de 1º grau é uma expressão linear em que se encontra o valor de uma variável (x) isolando-a em um dos lados da equação.");
          break;

      case '5':
          alert("A área é a medida da superfície de uma figura, enquanto o perímetro é a medida de seu contorno. Cada figura possui fórmulas específicas para calcular esses valores.");
          break;

      default:
          alert("Opção inválida. Por favor, escolha um número de 1 a 5.");
  }
}

function bhaskara(a, b, c) {
  const delta = Math.pow(b, 2) - 4 * a * c;
  if (delta < 0) return { x1: "não real", x2: "não real" };
  const x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
  const x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);
  return { x1, x2 };
}

function jurosSimples(principal, rate, time) {
  const juros = (principal * rate * time).toFixed(2);
  const montante = (parseFloat(principal) + parseFloat(juros)).toFixed(2);
  return { juros, montante };
}

function jurosCompostos(principal, rate, time) {
  const montante = (principal * Math.pow(1 + rate, time)).toFixed(2);
  const juros = (montante - principal).toFixed(2);
  return { juros, montante };
}

function equacaoPrimeiroGrau(a, b) {
  if (a === 0) return "Não é uma equação de 1º grau";
  const x = (-b / a).toFixed(2);
  return x;
}

function areaRetangulo(width, height) {
  return (width * height).toFixed(2);
}

function perimetroRetangulo(width, height) {
  return (2 * (width + height)).toFixed(2);
}

function areaTriangulo(base, height) {
  return ((base * height) / 2).toFixed(2);
}

function areaCirculo(radius) {
  return (3.14 * Math.pow(radius, 2)).toFixed(2);
}

function perimetroCirculo(radius) {
  return (2 * 3.14 * radius).toFixed(2);
}

iniciarPrograma();