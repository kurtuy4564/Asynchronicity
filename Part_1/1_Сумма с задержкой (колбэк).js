function delayedAdd(a, b, delay, callback) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    callback('Value is not number', null)
    return
  }

  setTimeout(() => {
    try {
      callback(null, a + b)
    } catch (error) {
      callback(error, null)
    }
  }, delay)
}

delayedAdd(2, 1, 50, (err, sum) => {
  if (err) return console.error(err)
  console.log('sum =', sum) // 5
})
