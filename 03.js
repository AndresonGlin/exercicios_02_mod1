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