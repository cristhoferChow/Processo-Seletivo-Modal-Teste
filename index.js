function multaLivro(valorPorDia, diasAtraso) {
    let multa = Math.max(valorPorDia * diasAtraso, 1.00);
    
    return `O valor da multa para ${diasAtraso} dias de atraso é: R$${multa.toFixed(2)}`;
}

function contarPalavras(frase) {
    let qtPalavras = frase.split(' ').length;
    return `Quantidade de palavras: ${qtPalavras}`;
}

function separarVetor(array) {
    let multiplosTres = array.filter(num => num % 3 === 0);
    let resto = array.filter(num => num % 3 !== 0);
    console.log(`Múltiplos de 3: ${multiplosTres.join(', ')}`);
    console.log(`Resto: ${resto.join(', ')}`);
}