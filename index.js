const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const fs = require('fs')
const read = require('read-file')
const projects = require('./data/projects.json')

app.prepare().then(() => {
  const server = express()

  server.get('/api/projects', (req, res) => {
    res.json(projects)
  })

  server.get('/api/posts', (req, res) => {
    const postTitles = fs.readdirSync('./markdown').map((p, i) => {
      return {
        title: p,
        id: i
      }
    })
    res.json(postTitles)
  })

  server.get('/api/post', (req, res) => {
    const title = req.query.title
    const markdown = read.sync(`./markdown/${title}`, {
      encoding: 'utf8'
    })
    const post = {
      title: req.query.title,
      text: markdown
    }
    res.json(post)
  })

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })
  server.listen(3001)
})
