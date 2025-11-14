const delay = ms => new Promise(r => setTimeout(r, ms))

const getUser = id => delay(20).then(() => ({ id, name: 'Alice' }))
const getPosts = uid =>
  delay(20).then(() => [
    { id: 1, userId: uid },
    { id: 2, userId: uid },
  ])
const getFirstPostComments = pid => delay(20).then(() => [{ id: 11, postId: pid }])

getUser(1)
  .then(user => {
    return getPosts(user.id)
  })
  .then(posts => {
    return getFirstPostComments(posts[0].id)
  })
  .then(comments => {
    console.log(comments)
  })
