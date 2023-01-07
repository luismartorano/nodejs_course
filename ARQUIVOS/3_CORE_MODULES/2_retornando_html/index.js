const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html') //apto a passar html
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1>')
})

server.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})