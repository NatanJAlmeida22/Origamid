// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = function () {
        return `${this.nome} andou`;
    }
}
  
/* Crie 3 pessoas, João - 20 anos,
Maria - 25 anos, Bruno - 15 anos */

const p1 = new Pessoa("João", 20)
const p2 = new Pessoa("Maria", 25)
const p3 = new Pessoa("Bruno", 15)
