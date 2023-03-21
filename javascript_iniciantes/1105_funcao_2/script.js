function book(name, year, author) {
    const object = {
        name: name.toUpperCase(),
        year: 2050 - year,
        phrase: `${name} by ${author}`
    }
    return object
}

const return_book = book("Lord of the Rings", 1954, "J. R. R. Tolkien")
console.log(return_book);
console.log();
console.log(return_book.phrase);