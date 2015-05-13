var db = require('../db')
var Sequelize = db.Sequelize

var Author = db.define('author', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})

module.exports = Author
