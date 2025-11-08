const mainContainer = document.getElementById('main')

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

async function getPostsWithComments(countPosts) {
  const [posts, comments] = await Promise.all([getPosts(countPosts), getComments()])

  return posts.map(post => {
    return { ...post, comments: comments.filter(comment => comment.postId === post.id) }
  })
}

getPostsWithComments(10).then(posts => {
  console.log(posts)
})
