const express = require('express')
const path = require('path')

const app = express()
const port = 3000 //usar a porta como variavel de ambiente

//aonde meus html vão ficar
const basePath = path.join(__dirname, 'templates')

//ainda do post-> precisamos ler o body via middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//post**************
app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/usersform.html`)
})

app.post('/users/save', (req, res) => {
    //req body -> precisamos ler o corpo da requisição
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do usuário é ${name} e ele tem ${age}`)
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id
    //leitura da tabela users, resgatar um usuario do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${basePath}/users.html`)

})
// uma rota para raiz, a gente tem uma resposta e um requisição em um função anônima
//usuario recebeu uma requisição, vem sempre pelo formulario
//a resposta é o q sempre a gente envia ao usuário
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

//temos mais um callback, função anônima que podemos executar alguma coisa
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})


