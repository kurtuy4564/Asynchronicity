function allSettled(promises) {
  if (promises.length === 0) {
    return Promise.resolve([])
  }

  return new Promise(resolve => {
    const results = new Array(promises.length)
    let completedCount = 0

    promises.forEach((promise, index) => {
      //TODO
    })

  })
}

const promise1 = Promise.resolve(1)
const promise2 = Promise.reject('Error')
const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 100))

allSettled([promise1, promise2, promise3]).then(results => {
  console.log(results)
  // [
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'rejected', reason: 'Error' },
  //   { status: 'fulfilled', value: 3 }
  // ]
})
