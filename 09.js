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



    