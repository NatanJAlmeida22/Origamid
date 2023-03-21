const add = document.querySelector("#somar")
let res = document.querySelector("#res")

function somar() {
    let numero = Number(res.textContent)
    if (numero >= 10) {
        console.log(`O resultado é maior ou igual a 10`);
    } else {
        numero += 1
    }

    res.innerHTML = numero
}

add.addEventListener("click", somar)