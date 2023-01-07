const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

const palavra = "teste maneiro"

const auth = true //testar com false para n imprimir se n estiver conectado -> o render n mostra

const approved = false


app.get('/dashboard', (req, res) => {
    
    const itens = ["item a", "item b", "item c"]
    res.render('dashboard', {itens})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender node.js',
        categoria: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender node.js',
        comments: 4
    }
    res.render('blogpost', {post} )
})

//renderizar a view (home), não temos um layout então = false
app.get('/', (req, res) => {
    const user = {
        name: "Luis Guilherme",
        surname: "Martorano",
        age: "39"
    }
    res.render('home', {user: user, palavra, auth, approved})
})

app.listen(port, () => {
    console.log(`App funcionando na porta ${port}`)
})