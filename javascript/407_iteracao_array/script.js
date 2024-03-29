// Selecione cada curso e retorne uma array com objetos contendo o título, descricao,aulas e horas de cada curso
let aulas = document.querySelectorAll(".curso")
let cursos = Array.from(aulas)
let grade = cursos.map((grade) => {
  let titulo = grade.querySelector("h1").innerText
  let descri = grade.querySelector("p").innerText
  let aulas = grade.querySelector(".aulas").innerText
  let horas = grade.querySelector(".horas").innerText
  return {
    titulo,
    descri,
    aulas,
    horas
  }
})
console.log(grade);


// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33]
const maior10 = numeros.filter(n => n > 100)
console.log(maior10);

// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
let baixo = instrumentos.some((item) => {
  return item.toLocaleLowerCase() === "baixo"
})
console.log(baixo);


// Retorne o valor total das compras
const compras = [
    {
      item: 'Banana',
      preco: 'R$ 4,99'
    },
    {
      item: 'Ovo',
      preco: 'R$ 2,99'
    },
    {
      item: 'Carne',
      preco: 'R$ 25,49'
    },
    {
      item: 'Refrigerante',
      preco: 'R$ 5,35'
    },
    {
      item: 'Quejo',
      preco: 'R$ 10,60'
    }
]

let tot = compras.reduce((acumulador, item) => {
  let valor = +item.preco.replace("R$ ", "").replace(",", ".").trim()
  return acumulador + valor
}, 0)

console.log(tot.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
