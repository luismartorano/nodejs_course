const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const users = require('./users')

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


//arquivos estáticos para o CSS ou outros em public, usaremos esse middleware
app.use(express.static('public'))

//qualquer outra coisa sempre após a raiz
//pegou do router, criou um middleware
app.use('/users', users)

//raiz
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta:${port}`)
})