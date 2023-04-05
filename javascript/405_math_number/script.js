/* Retorne um número aleatório
entre 1050 e 2000 */

const random = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050
console.log(random);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const numArray = numeros.split(", ")

let maior = 0
let menor = 0
numArray.forEach((item) => {
    item = Number.parseInt(item)
    if (item > maior) {
        maior = item
    } 
})
console.log(maior);
console.log();

/* Crie uma função para limpar os preços
e retornar os números com centavos arredondados
depois retorne a soma total */
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function cleanPrice(preco) {
    let tot = 0
    preco.forEach((item) => {
        item = +item.toUpperCase().replace("R$", "").replace(",", ".")
        item = +item.toFixed(2)
        tot += item
    })
    return tot
}

console.log(cleanPrice(listaPrecos));