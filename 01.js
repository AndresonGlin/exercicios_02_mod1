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

