const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//renderizar a view (home), não temos um layout então = false
app.get('/', (req, res) => {
    res.render('home', { layout: false })
})

app.listen(port, () => {
    console.log(`App funcionando na porta ${port}`)
})