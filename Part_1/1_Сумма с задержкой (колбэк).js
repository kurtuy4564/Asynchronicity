function delayedAdd(a, b, delay, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
    }, delay)
  })
}

delayedAdd(2, 3, 50, (err, sum) => {
  if (err) return console.error(err)
  console.log('sum =', sum) // 5
})
