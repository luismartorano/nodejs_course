const mysql = require('mysql')
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'martorano123',
    database: 'nodemysql'
})

//exportando
module.exports = pool