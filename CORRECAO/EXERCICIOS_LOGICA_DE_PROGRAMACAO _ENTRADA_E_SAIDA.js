// Exercício 1
function calcularNovoSalario(salario, porcentagemAumento) {
    const aumento = salario * (porcentagemAumento / 100);
    const novoSalario = salario + aumento;
    console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
}

// Exercício 2
function calcularDesconto(precoOriginal, porcentagemDesconto) {
    const desconto = precoOriginal * (porcentagemDesconto / 100);
    const precoFinal = precoOriginal - desconto;
    console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Preço final com desconto: R$ ${precoFinal.toFixed(2)}`);
}

// Exercício 3
function calcularAreaQuadrado(lado) {
    const area = lado * lado;
    console.log(`Área do quadrado: ${area.toFixed(2)} m²`);
}

// Exercício 4
function calcularAreaCirculo(raio) {
    const area = Math.PI * (raio * raio);
    console.log(`Área do círculo: ${area.toFixed(2)} m²`);
}

// Exercício 5
function calcularAreaTriangulo(base, altura) {
    const area = (base * altura) / 2;
    console.log(`Área do triângulo: ${area.toFixed(2)} m²`);
}

// Exercício 6
function calcularVelocidadeMedia(distancia, tempo) {
    const velocidadeMedia = distancia / tempo;
    console.log(`Velocidade média: ${velocidadeMedia.toFixed(2)} km/h`);
}

// Exercício 7
function calcularParcelas(valorFinal, quantidadeParcelas) {
    const valorParcela = valorFinal / quantidadeParcelas;
    console.log(`Valor de cada parcela: R$ ${valorParcela.toFixed(2)} (Total de ${quantidadeParcelas} parcelas)`);
}

// Exercício 8
function calcularValorRevenda(valorCompra) {
    const porcentagemLucro = 0.35;
    const valorRevenda = valorCompra + (valorCompra * porcentagemLucro);
    console.log(`Valor de revenda: R$ ${valorRevenda.toFixed(2)}`);
}

// Teste dos exercícios
calcularNovoSalario(2000, 10);           // Exemplo: salário de R$ 2000, aumento de 10%
calcularDesconto(100, 20);               // Exemplo: preço de R$ 100, desconto de 20%
calcularAreaQuadrado(5);                 // Exemplo: lado de 5 metros
calcularAreaCirculo(3);                  // Exemplo: raio de 3 metros
calcularAreaTriangulo(4, 6);             // Exemplo: base de 4 metros e altura de 6 metros
calcularVelocidadeMedia(100, 2);         // Exemplo: 100 km em 2 horas
calcularParcelas(1200, 6);               // Exemplo: compra de R$ 1200 em 6 parcelas
calcularValorRevenda(50);                // Exemplo: valor de compra de R$ 50
