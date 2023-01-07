const fs = require('fs')

if (!fs.existsSync('./minhapasta')) {
    console.log('Não existe')
    fs.mkdirSync("minhapasta")
    console.log("Pasta Criada!!!!!")
} else {
    (!fs.existsSync('./minhapasta'))
    console.log('Existe')
}





