var db = require('./db')
var Post = require('./models/post')

db.sync({ force: true})
  .then(createPost)
  .then(findTodaysPosts)
  .catch(console.error)


function createPost() {

  var data = {
    title: 'Hello Sequelize',
    content: 'I like Node.js & Sequelize!'
  }

  return Post.create(data)
    .then(function(post) {
      console.dir(post.get())
    })
}

function findTodaysPosts() {

  var today = new Date()
  today.setHours(0)
  today.setMinutes(0)
  today.setSeconds(0)
  today.setMilliseconds(0)

  return Post.findAll({
      where: {
        createdAt: { $gt: today }
      }
    })
    .then(function(posts) {
      console.log('\n\nToday\'s Posts')
      posts.forEach(function(post) {
        console.dir(post.get())
      })
    })

}