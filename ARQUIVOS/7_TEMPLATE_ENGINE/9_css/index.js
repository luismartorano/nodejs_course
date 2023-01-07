const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

//define os partials
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})
app.engine('handlebars', hbs.engine)

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//estaticos css -> middleware
app.use(express.static('public')) //método do express para definir a pasta estatica

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


//partials
app.get('/blog', (req,res) => {
    const posts = [
        {
        title: 'Aprender Node.js',
        categoria: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender node.js',
        comments: 4
        },
        {
        title: 'Aprender Vue.js',
        categoria: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender node.js',
        comments: 9
        },
        {
        title: 'Aprender C#',
        categoria: 'C#',
        body: 'Este artigo vai te ajudar a aprender node.js',
        comments: 12
        },
        {
        title: 'Aprender Python',
        categoria: 'Python',
        body: 'Este artigo vai te ajudar a aprender node.js',
        comments: 2
        }
    ]
    res.render('blog', {posts})

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