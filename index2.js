var db = require('./db')
var Post = require('./models/post')
var Author = require('./models/author')

require('./models/associations')

db.sync({ force: true})
  .then(createAuthor)
  .then(createPost)
  .then(findPostsByAuthor)
  .catch(console.error)


function createAuthor() {
  return Author.create({
      name: 'Mike Frey',
      email: 'frey.mike@gmail.com'
    })
    .then(function(author) {
      console.log('\nAuthor:')
      console.dir(author.get())
      return author
    })
}


function createPost(author) {
  return author.buildPost({
      title: 'Hello Sequelize',
      content: 'I like Node.js & Sequelize!',
      authorId: author.id
    })
  // return Post.create({
  //     title: 'Hello Sequelize',
  //     content: 'I like Node.js & Sequelize!',
  //     authorId: author.id
  //   })
    .then(function(post) {
      console.log('\nPost:')
      console.dir(post.get())
    })
}


function findPostsByAuthor() {

  var authorEmail = 'frey.mike@gmail.com'

  return Author.find({
      where: {
        email: authorEmail
      },
      include: [Post]
    })
    .then(function(author) {
      console.log('\nAuthor\'s Posts')
      author.posts.forEach(function(post) {
        console.dir(post.get())
      })
    })

}