var Sequelize = require('sequelize')
var db = new Sequelize('mydb', null, null, {
  dialect: 'postgres', port: 5432
})

module.exports = db
