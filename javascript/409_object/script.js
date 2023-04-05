// Crie uma função que verifique
// corretamente o tipo de dado
function tipo(params) {
    return `O tipo do parametro passado é ${typeof params}`
}

console.log(tipo(54.9));


// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
    lados: 4,
    area(cm) {
        return this.lados * cm
    } 
}
Object.freeze(quadrado)
quadrado.lados = 5
console.log(quadrado.area(4));

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: "#333"
}
Object.freeze(configuracao)
  
// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyDescriptor(String.prototype))
console.log(Object.getOwnPropertyDescriptor(Array.prototype))