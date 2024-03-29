// Crie uma função para verificar se um valor é Truthy

function isTruthy(date) {
    return !!date
}

/* Crie uma função matemática que retorne o perímetro de um quadrado
lembrando: perímetro é a soma dos quatro lados do quadrado */

function perimetro(n1, n2, n3, n4) {
    var perimetro = n1 + n2 + n3 + n4
    return perimetro
}

console.log(perimetro(4, 6, 8, 7))

/* Crie uma função que retorne o seu nome completo
ela deve possuir os parâmetros: nome e sobrenome */

function nomeCompleto(nome, sobrenome) {
    return `Seu nome completo é ${nome} ${sobrenome}`
}

console.log(nomeCompleto("Natan", "Almeida"));

// Crie uma função que verifica se um número é par

function par(num) {
    if (num % 2 == 0) {
        return `O número ${num} é par`
    } else {
        return `O número ${num} é ímpar`
    }
}

console.log(par(2))
console.log(par(5))

/* Crie uma função que retorne o tipo de
dado do argumento passado nela (typeof) */

function tipo(params) {
    return `O tipo informado é ${typeof(params)}`
}

console.log(tipo("Natan"))
console.log(tipo(55));


/* addEventListener é uma função nativa do JavaScript
o primeiro parâmetro é o evento que ocorre e o segundo o Callback
utilize essa função para mostrar no console o seu nome completo
quando o evento 'scroll' ocorrer. */

addEventListener("scroll", function() {
    console.log("Natan Almeida");
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
console.log(precisoVisitar(20))
console.log(jaVisitei(20));