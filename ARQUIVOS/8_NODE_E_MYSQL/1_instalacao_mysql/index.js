const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

//configurando nosso template engine da app
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'martorano123',
    database: 'nodemysql'
})

conn.connect(function (err) {
    if (err) {
        console.log(err)
    }

    console.log('Conectou ao Mysql!')

    app.listen(3000)
})
