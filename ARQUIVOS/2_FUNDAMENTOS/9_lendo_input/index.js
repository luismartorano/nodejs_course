const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual a sua linguagem preferida? ", (language) => {
    if (language === "Python") {
        console.log(`Tá de sacanagem, né? Vira homem!!!!`)
    } else {
        console.log(`A minha lingugem preferida é: ${language}`)
    }
    readline.close()
})