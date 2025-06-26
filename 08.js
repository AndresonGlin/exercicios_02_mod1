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
