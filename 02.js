/*
2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
*/

const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1; //Gera numero aleatorio

let tentativas = 0;
let palpite;

console.log("Tente adivinhar o número entre 1 e 100");

do {
    palpite = Number(prompt("Digite um numero: "));
    tentativas++;

    if (palpite > numeroSecreto) {
        console.log("Tente um número menor.");
    } else if (palpite < numeroSecreto) {
        console.log("Tente um número maior.");
    } else {
        console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
    }

} while (palpite !== numeroSecreto);
