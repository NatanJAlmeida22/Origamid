// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll("p")
const totChat = Array.from(p).reduce((acc, item) => {
    return acc + item.innerText.length
}, 0)
console.log(totChat);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo
function creatElement(tag, classe, conteudo) {
    let elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null
    conteudo ? elemento.innerHTML = conteudo : null
    return elemento
}
console.log(creatElement("ul", "menu", "Eu sou um menu"));


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = creatElement.bind(null, "h1", "titulo")
console.log(h1Titulo("Isso é um título de primeiro nível"));