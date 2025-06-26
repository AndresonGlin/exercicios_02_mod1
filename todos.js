/*
1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.
*/

const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
    const data = new Date(ano, mes -1, dia);
    return (
        data.getFullYear() === ano && data.getMonth() === mes -1 && data.getDate() === dia
    )
}

let entrada = prompt("Digite uma data no formato dd/mm/yyyy: ");

let [str_dia, str_mes, str_ano] = entrada.split("/");

let dia = Number(str_dia);
let mes = Number(str_mes);
let ano = Number(str_ano);


if(ehDataValida(dia, mes, ano)) {
    console.log(`${dia}/${mes}/${ano}, data informada é Valida!`)
} else {
    console.log(`${dia}/${mes}/${ano}, data informada é Invalida!`)
}


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

/*
3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.
*/

const prompt = require('prompt-sync')();

function unicas(frase){
    frase += ' ';
    let palavrasUnicas = [];
    let palavra = '';
    for(let i = 0; i < frase.length; i++){
        const letra = frase[i];
        if(letra === ' '){
            if(palavra.length > 0){
                if(!palavrasUnicas.includes(palavra)){
                    palavrasUnicas.push(palavra);
                }
            }
            palavra = '';            
        }else {
            palavra += letra;
        }
    }   
    return palavrasUnicas;
}

let texto = prompt("Digite uma frase: ");
console.log(unicas(texto))


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


/*
7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.
 */

const prompt = require('prompt-sync')();

function ordPreco(produtos) {
    const produtosOrdenados = produtos
    .sort((a, b) => a.preco - b.preco)  // Orde por preço
    .map(p => p.nome);                  // Nomes
    return produtosOrdenados;
}

let produtos = [];

for (let i = 0; i < 3; i++) {
    const nome = prompt(`Digite o nome do produto #${i + 1}: `);
    const preco = parseFloat(prompt(`Digite o preço do produto #${i + 1}: `));
    
    produtos.push({ nome, preco });
}

console.log("Produtos ordenados por preço:", ordPreco(produtos));


/*
8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.
 */

const vendas = [
  {cliente: 'Adao', total: 10.50},
  {cliente: 'Eva', total: 1.75},
  {cliente: 'Adao', total: 52.50},
  {cliente: 'Eva', total: 50.00},
]

const somaValor = vendas.reduce((acumulador, objeto) => {
  const cliente = objeto.cliente;
  const total = objeto.total;
  acumulador[cliente] = (acumulador[cliente] || 0) + total;
  return acumulador;
}, {});

console.log(somaValor)

/*
9. Conversão Entre Formatos
Escreva duas funções:
    ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
        valor], ... ] e retorna o objeto equivalente.
    ○ objetoParaPares(obj) faz o inverso, retornando um array de
        pares.
*/

function paresParaObjeto(pares){
    return Object.fromEntries(pares);
}
    pares = [['Profissao:', 'Dev'], ['Senioridade:', 'Jr'], ['Formacao:', 'Ciência da Computação']];
    const objeto = paresParaObjeto(pares)
    console.log(objeto);

function objetoParaPares(obj){
    return Object.entries(obj);
}
    obj = {Profissao: 'Analista de Dados', Senioridade: 'Pleno', Formacao: 'Engenharia de Software'};
    const convertido = objetoParaPares(obj);
    console.log(convertido);