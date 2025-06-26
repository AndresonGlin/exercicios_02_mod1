/*
5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.
*/

const prompt = require('prompt-sync')();

function debounce(fn, delay) {
    let temp;
    return function(...args) {
        const context = this;
        clearTimeout(temp);
        temp = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

function exibeMensagem(mensagem) {
    console.log('Exibindo mensagem...\n', mensagem);
}

const msg = debounce(exibeMensagem, 1000);
const mensagemUsuario = prompt('Digite a mensagem que quer exibir: ');
msg(mensagemUsuario);
