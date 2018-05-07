const toMarkdown = require('to-markdown')
const fs = require('fs')
const read = require('read-file')

const postsTitles = fs.readdirSync('./posts')

postsTitles.forEach(p => {
  const html = read.sync('./posts/' + p, { encoding: 'utf8' })
  const markdown = toMarkdown(html)
  fs.writeFileSync('./markdown/' + p + '.md', markdown)
})
