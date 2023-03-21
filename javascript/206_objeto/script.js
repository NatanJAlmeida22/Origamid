var pessoa = {
    nome: "Natan",
    idade: 23
}

console.log(typeof pessoa)
console.log(pessoa)

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro: function (lado) {
        return this.lados * lado
    },
    cinco() {
        return 5
    }
}

console.log(quadrado.lados)
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))
console.log(quadrado.cinco())
console.table(quadrado)