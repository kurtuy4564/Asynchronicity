function wait(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

async function code() {
  await wait(1000)
  console.log('success') // Выведется через 1000 мс
}

code()
