/* let pessoa = new Object({
    nome: "Natan"
})
// console.log(pessoa);

let carro = {
    init(valor) {
        this.marca = valor
        return this
    },
    acelerar() {
        return `${this.marca} acelerou`
    },
    buzinar() {
        return `${this.marca} buzinou`
    }
}

let honda = Object.create(carro).init("Honda")
console.log(honda.acelerar());

let ferrari = Object.create(carro).init("Ferrari")
console.log(ferrari.acelerar());

let funcaoAutomovel = {
    acelerar() {
        return "acelerou"
    },
    buzinar() {
        return "buzinou"
    }
}

let moto = {
    rodas: 2,
    capacete: true
}

let carro = {
    rodas: 4,
    mala: true
}

Object.assign(moto, funcaoAutomovel)
Object.assign(carro, funcaoAutomovel) */

let moto = {
    capacate: true
}

Object.defineProperties(moto, {
    rodas: {
        value: 2
    }
})