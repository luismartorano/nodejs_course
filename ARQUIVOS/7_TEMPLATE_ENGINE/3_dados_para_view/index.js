const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

const palavra = "teste maneiro"
//renderizar a view (home), não temos um layout então = false
app.get('/', (req, res) => {
    const user = {
        name: "Luis Guilherme",
        surname: "Martorano",
        age: "39"
    }
    res.render('home', {user: user, palavra})
})

app.listen(port, () => {
    console.log(`App funcionando na porta ${port}`)
})