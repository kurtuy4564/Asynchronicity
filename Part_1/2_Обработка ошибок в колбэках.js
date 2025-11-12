function readConfig(path, callback) {
  if (typeof path === 'string') {
    setTimeout(() => callback(null, { path: path }), 1000)
    return
  }

  const error = new Error('incorrect path')
  setTimeout(() => callback(error), 1000)
}

readConfig('/etc/app.json', (err, cfg) => console.log(err ? err.message : cfg)) // {path: '/etc/app.json }
readConfig(42, err => console.log(err)) // Error
