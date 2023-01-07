const fs = require('fs')
const http = require('http')



const port = 3000
const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if (!name) { //se não tiver o nome e não enviar nada, ele vai pra inicial
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        fs.writeFile('arquivo.txt', name, function (err, data) {
            res.writeHead(302, { //escreve e manda um status redirect 302.
                Location: '/', //quando ele escrever o nome dele, volta para barra /
            })
            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})