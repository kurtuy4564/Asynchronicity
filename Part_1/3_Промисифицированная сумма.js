function addAsync(a, b, delay = 50) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, delay)
  })
}

addAsync(2, 3).then(x => console.log(x)) // 5
