const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual o nome do aluno?'
    },
    {
        name: 'p2',
        message: 'Qual a idade?'
    },
])
    .then((answers) => {
        //console.log(answers)
        if (!answers.p1 || !answers.p2) {
            throw new Error(`Nome e idade são campos obrigatórios!`)
        }
        const nome = answers.p1
        const idade = answers.p2
        console.log(chalk.bgYellow.black(`O nome do aluno é ${nome} com a idade de ${idade} anos`))
    })
    .catch(err => console.log(`Erro: ${err}`))