module.exports = fn => {
  console.log('getPost triggered')
  const post = {
    title: 'Test',
    body: '### Test'
  }
  return fn(null, post)
}
