// =====================
// MÉTODOS DE ARRAY
// =====================

let frutas = ["maçã", "banana", "laranja"];

// push() → adiciona item ao final
frutas.push("uva"); // ["maçã", "banana", "laranja", "uva"]

// pop() → remove o último item
frutas.pop(); // ["maçã", "banana", "laranja"]

// shift() → remove o primeiro item
frutas.shift(); // ["banana", "laranja"]

// unshift() → adiciona item no início
frutas.unshift("morango"); // ["morango", "banana", "laranja"]

// length → retorna o tamanho do array
console.log("Quantidade de frutas:", frutas.length); // 3

// includes() → verifica se um valor existe
console.log("Tem banana?", frutas.includes("banana")); // true

// indexOf() → retorna o índice de um valor
console.log("Índice da laranja:", frutas.indexOf("laranja")); // 2

// forEach() → percorre cada item do array
frutas.forEach(function(fruta, indice) {
  console.log(indice + ": " + fruta);
});

// map() → cria novo array com base nos valores
let numeros = [1, 2, 3];
let dobrados = numeros.map(function(n) {
  return n * 2;
});
console.log("Dobro dos números:", dobrados); // [2, 4, 6]

// filter() → filtra elementos com base em condição
let maioresQue2 = numeros.filter(function(n) {
  return n > 2;
});
console.log("Maiores que 2:", maioresQue2); // [3]

// find() → retorna o primeiro que satisfaz a condição
let encontrado = numeros.find(function(n) {
  return n > 1;
});
console.log("Primeiro maior que 1:", encontrado); // 2

// sort() → ordena os elementos
let baguncado = [3, 1, 4, 2];
baguncado.sort(); // [1, 2, 3, 4]
console.log("Array ordenado:", baguncado);


// =====================
// OBJETOS
// =====================

let pessoa = {
  nome: "Ana",
  idade: 25,
  profissao: "Designer"
};

// Acessando propriedades
console.log("Nome da pessoa:", pessoa.nome); // Ana

// Object.keys() → retorna as chaves
console.log("Chaves do objeto:", Object.keys(pessoa)); // ["nome", "idade", "profissao"]

// Object.values() → retorna os valores
console.log("Valores do objeto:", Object.values(pessoa)); // ["Ana", 25, "Designer"]

// Object.entries() → retorna pares chave/valor
console.log("Entradas do objeto:", Object.entries(pessoa)); // [["nome", "Ana"], ["idade", 25], ["profissao", "Designer"]]

// hasOwnProperty() → verifica se uma chave existe
console.log("Tem 'idade'?", pessoa.hasOwnProperty("idade")); // true
console.log("Tem 'altura'?", pessoa.hasOwnProperty("altura")); // false

// =====================
// ARRAY DE OBJETOS
// =====================

let alunos = [
  { nome: "Carlos", nota: 7 },
  { nome: "Beatriz", nota: 9 },
  { nome: "João", nota: 5 }
];

// Acessando dados
console.log("Nota da Beatriz:", alunos[1].nota); // 9

// filter() → alunos aprovados
let aprovados = alunos.filter(function(aluno) {
  return aluno.nota >= 7;
});
console.log("Alunos aprovados:", aprovados);

// map() → nomes dos alunos
let nomes = alunos.map(function(aluno) {
  return aluno.nome;
});
console.log("Nomes dos alunos:", nomes);

// find() → encontrar aluno com nota 5
let aluno