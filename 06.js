/*
6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.
*/

const prompt = require('prompt-sync')();

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const resultado = fn.apply(this, args);
    cache[key] = resultado;
    return resultado;
  };
}

const somar = (a, b) => a + b;

const calculo = memoize(somar);

let a = parseFloat(prompt("Digite o primeiro valor: "));
let b = parseFloat(prompt("Digite o segundo valor: "));

console.log("Resultado da soma:", calculo(a, b));



