/*
4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.
 */

const prompt = require('prompt-sync')();

function fat(n) {
    if (n < 0) {
        throw new Error("Números negativos, fatorial não pode ser definido.");
    } else if (n === 0) {
        return 1;
    } else {
        return n * fat(n - 1);
    }
}

let numero = parseInt(prompt("De qual número você deseja calcular o fatorial?"));
console.log(fat(numero)); 
