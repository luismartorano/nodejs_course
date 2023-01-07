const express = require('express')
const exphbs = require('express-handlebars')

const pool = require('./db/conn')
//console.log(pool)

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

app.post('/books/insertbook', function (req, res) {
  const title = req.body.title
  const pageqty = req.body.pageqty

  const sql = `INSERT INTO book (title, pageqty) VALUES ('${title}', ${pageqty})`

  pool.query(sql, function (err) {
    if (err) {
      console.log(err)
    }

    res.redirect('/books')
  })
})

app.get('/books', (req, res) => {
  const sql = `SELECT * FROM book`
  
  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err)
      return
    }

    const book = data
    //console.log(book)
    res.render('books', { book })
  })
})

app.get('/books/:id', (req, res) => {
  const id = req.params.id
  const sql = `SELECT * FROM book WHERE id = ${id}`
  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    const book = data[0]
    //console.log(data[0])
    res.render('book', { book })
  })
})

app.get('/books/edit/:id', function (req, res) {
  const id = req.params.id

  const sql = `SELECT * FROM book WHERE id = ${id}`

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err)
    }

    const book = data[0]

    //console.log(data[0])

    res.render('editbook', { book })
  })
})

app.post('/books/updatebook', function (req, res) {
  const id = req.body.id //não pode ser params pq está pegando o id pro banco
  const title = req.body.title
  const pageqty = req.body.pageqty

  const sql = `UPDATE book SET title = '${title}', pageqty = '${pageqty}' WHERE id = '${id}'`
  
  pool.query(sql, function (err) {
    if (err) {
      console.log(err)
      
    }

    res.redirect('/books')
  })
})

app.post('/books/remove/:id', function (req, res) {
  const id = req.params.id

  const sql = `DELETE FROM book WHERE id = ${id}`
  
  pool.query(sql, function (err) {
    if (err) {
      console.log(err)
      return
    }

    res.redirect('/books')
  })
})

app.listen(3000)


console.group()
const host = pool.config.connectionConfig.host
const porta = pool.config.connectionConfig.port
const conlimit = pool.config.connectionLimit
console.log("Conectado com sucesso ao MYSQL no", "Host =", host, "na Porta =", porta, "com Limite de Conexão =", conlimit)
//console.log("Conectado com sucesso ao MYSQL no", "Host= " + host + " na Porta = " + porta + " com Limite de Conexão = " + conlimit)
console.groupEnd()


