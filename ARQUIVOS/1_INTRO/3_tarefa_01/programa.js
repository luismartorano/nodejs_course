const a = 10;
const b = 5;
const mostra = a + b;
const mostra2 = a * b;
const mostra3 = mostra2 - mostra
const mostra4 = (mostra * mostra2) / mostra3

console.log('a + b =', mostra, '\n a * b =', mostra2, '\n (a * b) - (a + b) =', mostra3, '\n ((a + b) * (a * b)) / (a * b) - (a + b) =', mostra4)

//ler arquivo
const fs = require('fs')

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    };

    console.log(data);


})
