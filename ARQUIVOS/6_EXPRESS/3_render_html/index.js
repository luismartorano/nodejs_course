const express = require('express')
const path = require('path')

const app = express()
const port = 3000 //usar a porta como variavel de ambiente

//aonde meus html vão ficar
const basePath = path.join(__dirname, 'templates')


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
