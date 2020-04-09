const removePosition = require('unist-util-remove-position')

module.exports.transform = (options = {}, posts) => {
  return posts.map(post => { 
    post.content = removePosition(post.content)
    return post
   })
}
