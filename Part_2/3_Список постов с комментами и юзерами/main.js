const mainContainer = document.getElementById('main')

function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  return fetch(url)
    .then(response => response.json())
    .then(users => users)
}

function getPosts(count) {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  return fetch(url)
    .then(response => response.json())
    .then(posts => posts.slice(0, count))
}

function getComments() {
  const url = 'https://jsonplaceholder.typicode.com/comments'
  return fetch(url)
    .then(response => response.json())
    .then(comment => comment)
}

async function getFullPosts(countPosts) {
  const [posts, comments, users] = await Promise.all([
    getPosts(countPosts),
    getComments(),
    getUsers(),
  ])

  return posts.map(post => {
    return {
      ...post,
      comments: comments.filter(comment => comment.postId === post.id),
      user: { ...users.find(user => user.id === post.userId) },
    }
  })
}

getFullPosts(10).then(posts => {
  console.log(posts)
})
