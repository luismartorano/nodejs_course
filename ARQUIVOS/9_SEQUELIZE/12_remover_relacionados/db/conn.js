const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', 'martorano123', {
  host: '10.244.1.2',
  //host: 'mysql.default.svc',
  dialect: 'mysql',
})

// try {
//   sequelize.authenticate()
//   console.log('Conectamos com o Sequelize!')
// } catch (error) {
//   console.error('Não foi possível conectar:', error)
// }

module.exports = sequelize
