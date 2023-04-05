// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
];

let totTax = 0
let totRec = 0
transacoes.forEach((item) => {
    const numero = +item.valor.replace("R$ ", "")
    if (item.descricao.toLocaleLowerCase().slice(0, 4) === "taxa") {
        totTax += numero
    } else {
        totRec += numero
    }
})

console.log(`O total de taxas é R$${totTax} e o total de recebimento é R$${totRec}`);
  
// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'

const arrayTransporte = transportes.split(";")
console.log(arrayTransporte);

  
// Substitua todos os span's por a's
let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

html = html.split("span").join("a")
console.log(html);

// Retorne o último caracter da frase

const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1]);
  
// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário','TARIFA especial'];

let totIte = 0
transacoes2.forEach((item) => {
    item = item.toLowerCase().trim().slice(0, 4)
    if (item === "taxa") {
        totIte++
    }
})

console.log(totIte);