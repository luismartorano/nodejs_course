const chalk = require("chalk")

const nota = 5

if (nota >= 7) {
    console.log(chalk.green('Parabéns, você está aprovado!!!!'))
} else {
    console.log(chalk.bgRed.blackBright('Você precisa fazer a prova de recuperação'))
}