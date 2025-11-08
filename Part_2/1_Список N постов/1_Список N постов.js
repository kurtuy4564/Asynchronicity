function getPosts(n) {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  return fetch(url)
    .then(response => response.json())
    .then(posts => posts.slice(0, n))
}

getPosts(10).then(console.log)
