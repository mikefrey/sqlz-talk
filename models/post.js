var db = require('../db')
var Sequelize = db.Sequelize

var Post = db.define('post', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  visible: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Post
