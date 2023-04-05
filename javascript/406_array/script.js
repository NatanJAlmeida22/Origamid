const comidas = ["Pizza", "Frango", "Carne", "Macarrão"]
// Remova o primeiro valor de comidas e coloque em uma variável
let first = comidas.shift()
// Remova o último valor de comidas e coloque em uma variável
let last = comidas.pop()
// Adicione "Arroz" ao final do array
comidas.push("Arroz")
// Adicione "Peixe" e "Batata" ao início do array
comidas.unshift("Peixe", "Arroz")

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']
// Arrume os estudantes em ordem alfabética
estudantes.sort()
console.log(`Ordem alfabética ${estudantes}`);
// Inverta a ordem dos estudantes
estudantes.reverse()
console.log(`Ordem inversa ${estudantes}`)
// Verifique se Joana faz parte dos estudantes
console.log(`Joana faz parte de estudantes: ${estudantes.includes("Joana")}`)
// Verifique se Juliana faz parte dos estudantes
console.log(`Juliana faz parte de estudantes: ${estudantes.includes("Juliana")}`)

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
/* Substitua section por ul e div com li,
utilizando split e join */
html = html.split("section").join("ul").split("div").join("li")
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda']
/* Remova o último carro, mas antes de remover
salve a array original em outra variável */
const carrosOriginal = carros
carros.pop()
console.log(carros);