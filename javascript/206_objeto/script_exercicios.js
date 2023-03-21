/* Crie um objeto com os seus dados pessoais
Deve possui pelo menos duas propriedades nome e sobrenome */

var dados = {
    nome: "Natan",
    sobrenome: "Almeida",
    formado: false,
    idade: 23
}

console.log(dados)

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function () {
    return `Seu nome completo é ${this.nome} ${this.sobrenome}`
}

console.log(dados.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
carro.preco = 3000
console.log(carro.preco);
  
/* Crie um objeto de um cachorro que represente um labrador,
preto com 10 anos, que late ao ver um homem */

var cachorro = {
    raca: "Labrador Preto",
    idade: 10,
    late: function(pessoa) {
        if (pessoa === "homem") {
            return "O cachorro está latindo"
        } else {
            return "O cachorro está calado"
        }
    }
}  

console.log(cachorro);
console.log(cachorro.late("homem"));