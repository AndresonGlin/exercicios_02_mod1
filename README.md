<h1>Dev Full Stack Jr - Lista de Exercícios 2 - JavaScript</h1>
<p>
        Este repositório contém exercícios que contemplam as operações fundamentais, estruturas de controle condicional e de repetição. Para cada exercício utiliza-se a biblioteca <code>prompt-sync</code> para entrada de dados no terminal.
</p>

<h2>Pré-requisitos</h2>
<ul>
<li>Node.js instalado em sua máquina.</li>
<li>Biblioteca <code>prompt-sync</code> instalada. Caso não esteja instalada, execute o comando abaixo:</li>
</ul>
<pre><code>npm install prompt-sync</code></pre>

<h2>Exercícios</h2>
<ol>
<li><strong>Validação de Datas:</strong> Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.</li>
<li><strong>Jogo de Adivinhação:</strong> Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.</li>
<li><strong>Palavras Únicas:</strong> Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.</li>  
<li><strong>Fatorial Recursivo:</strong>Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.</li>
<li><strong>Debounce:</strong> Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.</li>
<li><strong>Memoization:</strong> Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.</li>
<li><strong>Mapeamento e Ordenação:</strong> Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.</li>
<li><strong>Agrupamento por Propriedade:</strong> Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.</li>
  
<li><strong>Conversão Entre Formatos:</strong> Escreva duas funções:
1 paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
2 objetoParaPares(obj) faz o inverso, retornando um array de pares.</li>
</ol>

<h2>Como Executar</h2>
<ol>
<li>Clone este repositório:
<pre><code>git clone https://github.com/AndresonGlin/exercicios_02_mod1.git;
cd exercicios_02_mod1</code></pre>
</li>
<li>Execute o arquivo desejado com o Node.js:
<pre><code>node &lt;nome_do_arquivo&gt;.js</code></pre>
            Por exemplo:
<pre><code>node 01.js</code></pre>
</li>
<li>Siga as instruções exibidas no terminal.</li>
</ol>

<h2>Arquivo Geral</h2>
<p>
        O arquivo <code>todos.js</code> contém todos os exercícios. Você pode executá-lo, mas para isso será necessário instalar um editor de codigo fonte como o Visual Studio Code, e também para cada questão será necessário usar os comentário para executa-lá separadamente.
</p>
<pre><code>node todos.js</code></pre>

<h2>Contribuição</h2>
<p>
        Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
</p>

<h2>Licença</h2>
<p>
        Este projeto está licenciado sob a licença MIT.
</p>
